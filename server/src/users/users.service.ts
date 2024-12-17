import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "./users.entity";
import {Repository} from "typeorm";
import {UsersDto} from "./users.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersEntity)
        private userRepository: Repository<UsersEntity> ,
    ) {}

    async findAll(): Promise<UsersEntity[]> {
        return this.userRepository.find();
    }
    async createUser(dto:UsersDto): Promise<UsersEntity> {
        const user= await this.userRepository.create(dto);
        return  this.userRepository.save(user);
    }
}
