export interface ITaskCreateRequestBody {
    name: string;

    description: string;
    statusId:number

    executorId: number;
}
export interface ITaskEditRequestBody extends ITaskCreateRequestBody{
    id:number
}
export interface IStatus{
    id:number;
    name:string;
}

export interface ITask {
    id: number,
    name: string,
    description: string,
    status: IStatus,
    executor: {
        id: number,
        name: string,
        description: string | null,
        email: string
    }
}