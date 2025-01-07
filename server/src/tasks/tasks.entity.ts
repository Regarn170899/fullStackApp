import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsersEntity} from "../users/users.entity";
import {StatusTaskEntity} from "../status-task/status-task.entity";


@Entity()
export class TasksEntity {
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
    })
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text',{ nullable: true })
    description: string;

    @ManyToOne(()=>StatusTaskEntity,(statusTask)=>statusTask.tasks,)
    status: StatusTaskEntity;

    @ManyToOne(() => UsersEntity, (user) => user.tasks, { nullable: false })
    executor: UsersEntity;

}
