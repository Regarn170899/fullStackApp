import React, { useState } from "react";
import styles from './TaskBoard.module.css'
import {ITask, selectTasks, updateTasks} from "../Task/taskSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";
import {editTask} from "../Task/api";



const TaskBoard: React.FC = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(selectTasks);

    const getSortedTasks = (status: string) =>
        tasks
            .filter(item => item.status === status)
            .sort((a, b) => a.order - b.order);

    const sourceTasks = getSortedTasks('Источник');
    const goalTasks = getSortedTasks('Цель');

    const [draggedItem, setDraggedItem] = useState<ITask | null>(null);

    const onDragStart = (item: ITask) => {
        setDraggedItem(item);
    };

    const onDropContainer = async (status: string) => {
        if (!draggedItem) return;
        const statusItems = tasks.filter((t: ITask) => t.status === status);
        const maxOrder = statusItems.reduce((m, i) => Math.max(m, i.order), 0);
        const updated = { ...draggedItem, status, order: maxOrder + 1 };
        const updatedTasks = tasks.map((item: ITask) => item.id === draggedItem.id ? updated : item);
        dispatch(updateTasks(updatedTasks));
        await editTask({ id: updated.id, status: updated.status, order: updated.order });
        setDraggedItem(null);
    };

    const onDropItem = async (target: ITask) => {
        if (!draggedItem || target.id === draggedItem.id) return;
        const replacements: Record<number, ITask> = {
            [draggedItem.id]: { ...draggedItem, status: target.status, order: target.order },
            [target.id]: { ...target, order: draggedItem.order }
        };
        const updatedTasks = tasks.map((item: ITask) => replacements[item.id] ?? item);
        dispatch(updateTasks(updatedTasks));
        await Promise.all([
            editTask({ id: draggedItem.id, status: target.status, order: target.order }),
            editTask({ id: target.id, order: draggedItem.order })
        ]);
        setDraggedItem(null);
    };

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            <div
                className={styles.container}
                onDragOver={onDragOver}
                onDrop={() => onDropContainer('Источник')}
            >
                <h3>Источник</h3>
                {sourceTasks.map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => onDragStart(item)}
                        onDrop={() => onDropItem(item)}
                        onDragOver={onDragOver}
                        className={styles.item}
                    >
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Цель */}
            <div
                className={styles.container}
                onDragOver={onDragOver}
                onDrop={() => onDropContainer('Цель')}
            >
                <h3>Цель</h3>
                {goalTasks.map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => onDragStart(item)}
                        onDrop={() => onDropItem(item)}
                        onDragOver={onDragOver}
                       className={styles.item}
                    >
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskBoard;
