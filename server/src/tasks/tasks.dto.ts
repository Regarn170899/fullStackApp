

export class TasksDto{
    name: string;

    description: string;
    statusId:number;

    executorId: number;
}

export class TasksEditDto extends TasksDto {
    id: number;
}