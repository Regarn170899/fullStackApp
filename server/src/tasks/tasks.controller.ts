import {Body, Controller, Get, HttpCode, Patch, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {TasksDto, TasksEditDto} from "./tasks.dto";


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
    @Patch()
    async editTask(@Body() TaskDto:TasksEditDto){
        return this.taskService.editTask(TaskDto)
    }

}
