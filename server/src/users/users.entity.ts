import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TasksEntity} from "../tasks/tasks.entity";


@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text',{ nullable: true })
    description: string;

    @Column()
    email: string;

    @OneToMany(() => TasksEntity, (task) => task.executor)
    tasks: TasksEntity[];

}
