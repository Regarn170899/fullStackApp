import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {TasksEntity} from "./tasks.entity";
import {UsersEntity} from "../users/users.entity";
import {TasksDto, TasksEditDto} from "./tasks.dto";
import {updateProperties} from "../utils";

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TasksEntity)
        private taskRepository: Repository<TasksEntity>,

        @InjectRepository(UsersEntity)
        private userRepository: Repository<UsersEntity>,
    ) {}


    async createTask(dto:TasksDto):Promise<TasksEntity>{
        const user =await this.userRepository.findOneBy({id:dto.executorId})
        if(!user){
            throw new Error('Пользовательне наеден')
        }
        const task=this.taskRepository.create({
            ...dto,
            executor:user
        })
        return  this.taskRepository.save(task)
    }
    async editTask (dto:TasksEditDto):Promise<TasksEntity>{
        let task = await this.taskRepository.findOne({
            where: { id: dto.id },
            relations: ['executor'],
        });
        if (!task) {
            throw new Error(`Задача не наедена`);
        }
        task=updateProperties(task, dto);
        return  this.taskRepository.save(task);

    }
    async getAllTasks():Promise<TasksEntity[]>{
        return this.taskRepository.find({relations: ['executor'],})
    }
}

