import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "../users/users.entity";
import {TasksEntity} from "./tasks.entity";
import {TasksController} from "./tasks.controller";
import {TasksService} from "./tasks.service";
import {StatusTaskEntity} from "../status-task/status-task.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity,TasksEntity,StatusTaskEntity])],
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule {
}

