import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "../users/users.entity";
import {TasksEntity} from "./tasks.entity";
import {TasksController} from "./tasks.controller";
import {TasksService} from "./tasks.service";

@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity,TasksEntity])],
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule {
}

