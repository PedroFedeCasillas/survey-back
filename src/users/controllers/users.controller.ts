import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAnswerDto, UpdateAnswerDto } from '../dto/user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('create')
     public async createUsers(@Body() body: CreateAnswerDto){
          return await this.usersService.createUsers(body)
     };

    @Get('all')
     public async getAllUsers() {
     return await this.usersService.getAllUsers();
  }

  @Get(':id')
  public async getUserById(@Param('id') id: string){
  const user = await this.usersService.getUserById(id);
  return user;
  }

  @Put('edit/:id')
  public async updateUser(
    @Param('id') id: string,
    @Body() body: UpdateAnswerDto,
  ) {
    return await this.usersService.updateUser(id, body);
  }

  @Delete('delete/:id')
  public async deleteUser(@Param('id') id: string){
    return await this.usersService.deleteUser(id);
  }
}
