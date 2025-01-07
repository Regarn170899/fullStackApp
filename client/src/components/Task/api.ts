import {instanceApi} from "../../constans";
import {ITaskCreateRequestBody, ITaskEditRequestBody} from "./types";

export const getAllTasks = async ()=>{
    return await instanceApi.get('tasks',{})
}
export const createTask = async (body:ITaskCreateRequestBody) => {
    return await instanceApi.post('tasks', body)
}
export const editTask = async (body:ITaskEditRequestBody) => {
    return await instanceApi.patch('tasks', body)
}