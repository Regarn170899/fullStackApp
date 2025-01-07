import styles from './Task.module.css'
import {ITask} from "./types";


interface IProps{
    onDragStart:(item: ITask) => void,
    task:ITask

}
const Task = ({onDragStart,task}:IProps) => {
    return (
        <div className={styles.container}>
            <div
                key={task.id}
                draggable
                onDragStart={() => onDragStart(task)}
                className={styles.item}
            >
                <p>{task.name}</p>
                <p>{task.description}</p>
            </div>
        </div>
    );
};

export default Task;