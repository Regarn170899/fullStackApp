import {Controller, Get} from '@nestjs/common';
import {StatusTaskService} from "./status-task.service";

@Controller('status-task')
export class StatusTaskController {

    constructor(private readonly statusTaskService: StatusTaskService) {}

    @Get()
    async getAllStatusTask(){
        return this.statusTaskService.getAllStatusTask()
    }

}



