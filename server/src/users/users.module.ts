import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users.entity";
import {TasksEntity} from "../tasks/tasks.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity,TasksEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
