import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsersEntity} from "../users/users.entity";
import {TasksEntity} from "../tasks/tasks.entity";


@Entity()
export class StatusTaskEntity {
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
    })
    id: number;

    @Column({ length: 500 })
    name: string;

    @OneToMany(() => TasksEntity, (task) => task.status.name)
    tasks: TasksEntity[];
}
