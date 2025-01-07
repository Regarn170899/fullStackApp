import { Module } from '@nestjs/common';
import { StatusTaskService } from './status-task.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TasksEntity} from "../tasks/tasks.entity";
import {StatusTaskEntity} from "./status-task.entity";
import {StatusTaskController} from "./status-task.controller";

@Module({
  imports: [TypeOrmModule.forFeature([StatusTaskEntity,TasksEntity])],
  controllers: [StatusTaskController],
  providers: [StatusTaskService]
})
export class StatusTaskModule {}
