import {Body, Controller, Get, HttpCode, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {TasksDto} from "./tasks.dto";

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TasksService) {}

    @Post()
    async createTask(@Body() TaskDto:TasksDto ){
        return this.taskService.createTask(TaskDto)
    }

    @Get()
    async getAllTask(){
        return this.taskService.getAllTasks()
    }
}
