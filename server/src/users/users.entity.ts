import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


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

}
