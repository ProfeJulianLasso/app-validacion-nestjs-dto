import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewUserDTO } from '../dto/new-user.dto';
import { UserDTO } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Array<UserDTO> {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() user: NewUserDTO): UserDTO {
    const newUser = new UserDTO(user);
    this.userService.register(newUser);
    return newUser;
  }
}
