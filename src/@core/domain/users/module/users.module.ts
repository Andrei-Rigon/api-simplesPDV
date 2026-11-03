import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from '../entities/user.entity';
import { UsersProvider } from '../providers/users.providers';

@Module({
  imports: [SequelizeModule.forFeature([Users])],  
  controllers: [UsersController],
  providers: [
    UsersService,
      ...UsersProvider
  ],
  exports: [UsersService],
})
export class UsersModule {}
