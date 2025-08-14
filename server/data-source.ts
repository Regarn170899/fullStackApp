import 'dotenv/config';
import { DataSource } from 'typeorm';
import { TasksEntity } from './src/tasks/tasks.entity';
import { UsersEntity } from './src/users/users.entity';

export const AppDataSource = new DataSource({
    type: process.env.dialect as any,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [TasksEntity, UsersEntity],
    migrations: ['src/migrations/*.ts'],
});

export default AppDataSource;
