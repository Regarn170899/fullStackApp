import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {DatabaseModule} from "./database/database.module";
import {ConfigModule} from "@nestjs/config";
import {configuration} from "./configuration";
import { TasksModule } from './tasks/tasks.module';
import { StatusTaskController } from './status-task/status-task.controller';
import { StatusTaskModule } from './status-task/status-task.module';

@Module({
  imports: [UsersModule,DatabaseModule,ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
    }), TasksModule, StatusTaskModule],
})
export class AppModule {}
