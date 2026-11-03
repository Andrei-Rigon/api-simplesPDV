import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Species } from '../entities/specie.entity';

@Module({
  imports: [SequelizeModule.forFeature([Species])],
})
export class SpecieModule {}
