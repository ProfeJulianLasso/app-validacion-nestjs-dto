import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';

@Injectable()
export class UserService {
  private user: Array<UserDTO>;

  constructor() {
    this.user = new Array<UserDTO>();
  }

  register(user: UserDTO): void {
    this.user.push(user);
  }

  findAll(): Array<UserDTO> {
    return this.user;
  }
}
