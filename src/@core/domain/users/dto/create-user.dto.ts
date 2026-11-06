import { Exclude } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
export class CreateUserDto {

@IsString()
@MaxLength(255)
@IsNotEmpty({ message: 'The name field is required'})
name!:string

@IsString()
@IsEmail()
@MaxLength(255)
@IsNotEmpty({ message: 'The email field is required'})
email!:string

@IsString()
@MaxLength(255)
@IsNotEmpty({ message: 'The password field is required'})
password!:string

}
