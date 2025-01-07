import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {TasksEntity} from "./tasks.entity";
import {UsersEntity} from "../users/users.entity";
import {TasksDto, TasksEditDto} from "./tasks.dto";
import {updateProperties} from "../utils";
import {StatusTaskEntity} from "../status-task/status-task.entity";

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TasksEntity)
        private taskRepository: Repository<TasksEntity>,

        @InjectRepository(UsersEntity)
        private userRepository: Repository<UsersEntity>,
        @InjectRepository(StatusTaskEntity)
        private statusTaskRepository: Repository<StatusTaskEntity>,
    ) {}


    async createTask(dto:TasksDto):Promise<TasksEntity>{
        const user =await this.userRepository.findOneBy({id:dto.executorId})
        const status =await this.statusTaskRepository.findOneBy({id:dto.statusId})

        if(!user){
            throw new Error('Пользовательне наеден')
        }
        const task=this.taskRepository.create({
            ...dto,
            status,
            executor:user
        })
        return  this.taskRepository.save(task)
    }
    async editTask (dto:TasksEditDto):Promise<TasksEntity>{
        let task = await this.taskRepository.findOne({
            where: { id: dto.id },
            relations: ['executor','status'],
        });
        const status =await this.statusTaskRepository.findOneBy({id:dto.statusId})
        if (!task) {
            throw new Error(`Задача не наедена`);
        }
        const correctedDto={...dto,status}
        task=updateProperties(task, correctedDto);
        return  this.taskRepository.save(task);

    }
    async getAllTasks():Promise<TasksEntity[]>{
        return this.taskRepository.find({relations: ['executor','status'],})
    }
}

