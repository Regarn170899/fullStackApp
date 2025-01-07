

export class TasksDto{
    name: string;

    description: string;
    status:string

    executorId: number;
}

export class TasksEditDto extends TasksDto {
    id: number;
}