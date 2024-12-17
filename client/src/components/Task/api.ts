import {instanceApi} from "../../constans";
import {ITaskRequestBody} from "./taskSlice";

export const getAllTasks = async ()=>{
    return await instanceApi.get('tasks',{})
}
export const createTask = async (body:ITaskRequestBody) => {
    return await instanceApi.post('tasks', body)
}