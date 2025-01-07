import React, { useState } from "react";
import styles from './TaskBoard.module.css'
import {ITask, selectTasks, updateTasks} from "../Task/taskSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";



const TaskBoard: React.FC = () => {
const dispatch=useAppDispatch()
    const tasks=useAppSelector(selectTasks)
    console.log(tasks);

    const [draggedItem, setDraggedItem] = useState<ITask | null>(null);

    const onDragStart = (item: ITask) => {
        setDraggedItem(item);
    };

    const onDrop = (status:string) => {
        if (draggedItem) {
            const actualSourceItems=tasks.map((item:ITask)=>{
                if(item.id===draggedItem.id){
                    return {...item,status:status
                    }
                }
                return item
            })
            dispatch(updateTasks(actualSourceItems))
            setDraggedItem(null);
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
