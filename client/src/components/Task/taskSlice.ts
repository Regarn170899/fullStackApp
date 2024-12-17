import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getAllTasks} from "./api";
import {RootState} from "../../store";


export const getTasks = createAsyncThunk(
    'task/getAllTasks',
    async () => {
        const response = await getAllTasks()
        return response.data
    },
)
export interface ITaskRequestBody {
    name: string;

    description: string;
    status:string

    executorId: number;
}
interface ITask {
    id: number,
    name: string,
    description: string,
    status: string,
    executor: {
        id: number,
        name: string,
        description: string | null,
        email: string
    }
}
interface ITaskState {
   task: ITask|null
    tasks:ITask[]

    taskRequestBody:ITaskRequestBody|null,
}

const initialState: ITaskState = {
    task: null,
    tasks:[],
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
    },
})

export const {  } = taskSlice.actions
export const tasks=(state: RootState) => state.task.tasks

export default taskSlice.reducer