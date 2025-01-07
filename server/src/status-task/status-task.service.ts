import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TasksEntity} from "../tasks/tasks.entity";
import {Repository} from "typeorm";
import {UsersEntity} from "../users/users.entity";
import {StatusTaskEntity} from "./status-task.entity";

@Injectable()
export class StatusTaskService {
    constructor(
        @InjectRepository(StatusTaskEntity)
        private statusTaskRepository: Repository<StatusTaskEntity>,
    ) {}
    async getAllStatusTask():Promise<StatusTaskEntity[]>{
        return this.statusTaskRepository.find()
    }

}

