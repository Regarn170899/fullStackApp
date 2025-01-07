export interface ITaskCreateRequestBody {
    name: string;

    description: string;
    status:string

    executorId: number;
}
export interface ITaskEditRequestBody extends ITaskCreateRequestBody{
    id:number
}

export interface ITask {
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