import { Module } from '@nestjs/common';
import { SalesService } from '../services/sales.service';
import { SalesController } from '../controllers/sales.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sales } from '../entities/sales.entity';
import { SaleProvider } from '../providers/sales.providers';

@Module({
  imports: [SequelizeModule.forFeature([Sales])],
  controllers: [SalesController],
  providers: [
    SalesService,
    ...SaleProvider
  ],
})
export class SalesModule {}
