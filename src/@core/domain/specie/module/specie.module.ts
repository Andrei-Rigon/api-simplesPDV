  import { Module } from '@nestjs/common';
import { SpecieService } from '../services/specie.service';
import { SpecieController } from '../controllers/specie.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Species } from '../entities/specie.entity';
import { SpeciesProvider } from '../providers/specie.provider';

@Module({
  imports: [SequelizeModule.forFeature([Species])],
  controllers: [SpecieController],
  providers: [
    SpecieService,
    ...SpeciesProvider
  ],
})
export class SpecieModule {}
