import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsersEntity} from "../users/users.entity";


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
    @Column('text',{ nullable: false })
    status: string;

    @Column({ type: 'int', name: 'task_order', default: 0 })
    order: number;

    @ManyToOne(() => UsersEntity, (user) => user.tasks, { nullable: false })
    executor: UsersEntity;

}
