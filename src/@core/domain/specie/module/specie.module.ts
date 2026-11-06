import { Module } from '@nestjs/common';
import { SpecieService } from '../services/specie.service';
import { SpecieController } from '../controllers/specie.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Species } from '../entities/specie.entity';

@Module({
  imports: [SequelizeModule.forFeature([Species])],
  controllers: [SpecieController],
  providers: [SpecieService],
})
export class SpecieModule {}
