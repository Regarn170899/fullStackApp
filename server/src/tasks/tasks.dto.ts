import {IsOptional} from "class-validator";

export class TasksDto{
    name: string;

    description: string;
    status:string

    executorId: number;
}

export class TasksEditDto{
    id:number
    name: string;

    description: string;
    status:string

    executorId: number;
}