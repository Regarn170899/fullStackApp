import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {editTask, getAllStatuses, getAllTasks} from "./api";
import {RootState} from "../../store";
import {IStatus, ITask, ITaskCreateRequestBody, ITaskEditRequestBody} from "./types";


export const getTasks = createAsyncThunk(
    'task/getAllTasks',
    async () => {
        const response = await getAllTasks()
        return response.data
    },
)
export const getStatuses = createAsyncThunk(
    'task/getAllStatus',
    async () => {
        const response = await getAllStatuses()
        return response.data
    },
)
export const patchEditTask = createAsyncThunk(
    'task/editTask',
    async (task:ITaskEditRequestBody) => {
        const response = await editTask(task)
        return response.data
    },
)

interface ITaskState {
   task: ITask|null
    tasks:ITask[]
    statuses:IStatus[]
    taskRequestBody:ITaskCreateRequestBody|null,
}

const initialState: ITaskState = {
    task: null,
    tasks:[],
    statuses:[],
    taskRequestBody:null,
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.tasks=action.payload
        })
        builder.addCase(patchEditTask.fulfilled, (state, action) => {
            state.tasks=state.tasks.map((task:ITask)=>task.id===action.payload.id?action.payload:task)
        })
        builder.addCase(getStatuses.fulfilled, (state, action) => {
            state.statuses=action.payload
        })
    },
})
/*
export const { updateTasks } = taskSlice.actions*/



export const selectTasks=(state: RootState) => state.task.tasks
export const selectStatuses=(state: RootState) => state.task.statuses

export default taskSlice.reducer