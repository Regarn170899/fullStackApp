import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {DatabaseModule} from "./database/database.module";
import {ConfigModule} from "@nestjs/config";
import {configuration} from "./configuration";
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [UsersModule,DatabaseModule,ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
    }), TasksModule],
})
export class AppModule {}
