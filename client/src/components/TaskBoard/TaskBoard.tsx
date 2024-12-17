import React, { useState } from "react";
import styles from './TaskBoard.module.css'

interface Item {
    id: number;
    text: string;
    status: string;
}

const TaskBoard: React.FC = () => {

    const [sourceItems, setSourceItems] = useState<Item[]>([
        { id: 1, text: "Элемент 1",status:'Источник' },
        { id: 2, text: "Элемент 2",status:'Источник' },
        { id: 3, text: "Элемент 3",status:'Источник' },
    ]);


    const [draggedItem, setDraggedItem] = useState<Item | null>(null);

    const onDragStart = (item: Item) => {
        setDraggedItem(item);
    };

    const onDrop = (status:string) => {
        if (draggedItem) {
            const actualSourceItems=sourceItems.map((item:Item)=>{
                if(item.id===draggedItem.id){
                    return {...item,status:status
                    }
                }
                return item
            })
            setSourceItems(actualSourceItems)
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
                {sourceItems.filter(item=>item.status==='Источник').map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => onDragStart(item)}
                        className={styles.item}
                    >
                        {item.text}
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
                {sourceItems.filter(item=>item.status==='Цель').map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => onDragStart(item)}
                       className={styles.item}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskBoard;
