import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import type { UsersRepositoryInterface } from '../repositories/users.repositories';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepositories: UsersRepositoryInterface
  ){}

  
  async create(createUserDto: CreateUserDto) 
  {
    const saltOrRounds = 10;
    const password = createUserDto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    createUserDto.password = hash;
    return this.usersRepositories.create(createUserDto)
  }

  findAll() {
    return this.usersRepositories.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findUser(email: string) {
    return this.usersRepositories.findOne({
      where: {
        email
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
