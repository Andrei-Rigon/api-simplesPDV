import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import type { UsersRepositoryInterface } from '../repositories/users.repositories';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepositories: UsersRepositoryInterface
  ){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
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
