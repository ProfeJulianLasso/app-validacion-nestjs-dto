import { IsString, IsOptional, IsEmail } from 'class-validator';

export class NewUserDTO {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  @IsEmail()
  email: string;
}
