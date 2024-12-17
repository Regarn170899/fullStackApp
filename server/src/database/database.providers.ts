
import { DataSource } from 'typeorm';
import * as process from "process";
import {UsersEntity} from "../users/users.entity";
import {TasksEntity} from "../tasks/tasks.entity";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port:  Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database:process.env.POSTGRES_DB,
                entities: [
                    UsersEntity,TasksEntity
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
