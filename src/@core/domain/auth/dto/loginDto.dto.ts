import {
  IsInt,
  IsNotEmpty,
  IsNumberString,
  Min,
  IsOptional,
  IsString,
  IsEmail
} from 'class-validator';

export class LoginDto {

    @IsString()
    @IsEmail()
    @IsNotEmpty({ message: 'The email field is required'})
    email!: string

    @IsString()
    @IsNotEmpty({ message: 'The password field is required'})
    password!: string

}