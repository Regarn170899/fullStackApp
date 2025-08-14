import {IsOptional} from "class-validator";

export class TasksDto{
    name: string;

    description: string;
    status:string

    @IsOptional()
    order?: number

    executorId: number;
}

export class TasksEditDto{
    id:number
    @IsOptional()
    name?: string;

    @IsOptional()
    description?: string;
    @IsOptional()
    status?:string

    @IsOptional()
    order?: number

    @IsOptional()
    executorId?: number;
}