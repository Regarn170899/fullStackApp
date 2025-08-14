import {instanceApi} from "../../constans";
import {ITask, ITaskRequestBody} from "./taskSlice";

export const getAllTasks = async ()=>{
    return await instanceApi.get('tasks',{})
}
export const createTask = async (body:ITaskRequestBody) => {
    return await instanceApi.post('tasks', body)
}

export const editTask = async (body: Partial<ITask> & {id: number}) => {
    return await instanceApi.patch('tasks', body)
}