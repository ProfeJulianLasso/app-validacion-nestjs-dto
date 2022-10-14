import { NewUserDTO } from './new-user.dto';
import { v4 as uuidv4 } from 'uuid';

export class UserDTO {
  id: string;
  name: string;
  lastname?: string;
  email: string;

  constructor(data?: NewUserDTO) {
    this.id = uuidv4();
    this.name = data?.name ?? '';
    this.lastname = data?.lastname;
    this.email = data?.email ?? '';
  }
}
