import React, { useState } from "react";
import styles from './TaskBoard.module.css'
import {patchEditTask, selectTasks,} from "../Task/taskSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";
import {ITask} from "../Task/types";



const TaskBoard: React.FC = () => {
const dispatch=useAppDispatch()
    const tasks=useAppSelector(selectTasks)

    const [draggedItem, setDraggedItem] = useState<ITask | null>(null);

    const onDragStart = (item: ITask) => {
        setDraggedItem(item);
    };

    const onDrop = (status:string) => {
        if (draggedItem) {
          const task={
              id:draggedItem.id,
              name:draggedItem.name,
              description:draggedItem.description,
              status:status,
              executorId:draggedItem.executor.id
          }
          dispatch(patchEditTask(task))
        }
    };

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            <div
                className={styles.container}
                onDragOver={onDragOver}
                onDrop={()=>onDrop('Источник')}
            >
                <h3>Источник</h3>
                {tasks.filter(item=>item.status==='Источник').map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => onDragStart(item)}
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
                onDrop={()=>onDrop('Цель')}
            >
                <h3>Цель</h3>
                {tasks.filter(item=>item.status==='Цель').map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => onDragStart(item)}
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
