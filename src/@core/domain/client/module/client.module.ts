import { Module } from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { ClientController } from '../controllers/client.controller';
import { ClientsProvider } from '../providers/client.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from '../entities/client.entity';

@Module({
  imports: [SequelizeModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [
    ClientService,
      ...ClientsProvider,
  ],
})
export class ClientModule {}
