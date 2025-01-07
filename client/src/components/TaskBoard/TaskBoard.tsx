import React, { useState } from "react";
import styles from './TaskBoard.module.css'
import {patchEditTask, selectStatuses, selectTasks,} from "../Task/taskSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";
import {ITask} from "../Task/types";
import Task from "../Task/Task";



const TaskBoard: React.FC = () => {
const dispatch=useAppDispatch()
    const tasks=useAppSelector(selectTasks)
    const statuses=useAppSelector(selectStatuses)

    const [draggedItem, setDraggedItem] = useState<ITask | null>(null);

    const onDragStart = (item: ITask) => {
        setDraggedItem(item);
    };

    const onDrop = (statusId:number) => {
        if (draggedItem) {
          const task={
              id:draggedItem.id,
              name:draggedItem.name,
              description:draggedItem.description,
              statusId:statusId,
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
            {statuses.map((status)=>(
                <div
                    className={styles.container}
                    onDragOver={onDragOver}
                    onDrop={()=>onDrop(status.id)}
                >
                    <h3>{status.name}</h3>
                    {tasks.filter(item=>item.status.name===status.name).map((item) => (
                        <Task task={item} onDragStart={onDragStart}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TaskBoard;
