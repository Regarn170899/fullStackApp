import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {UsersDto} from "./users.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Get()
    async getAllUsers(){
        return this.usersService.findAll()
    }
    @Post()

    async createUser(@Body()UsersDto:UsersDto){
        return this.usersService.createUser(UsersDto)
    }
}
