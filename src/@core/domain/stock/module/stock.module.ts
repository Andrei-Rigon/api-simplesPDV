import { Module } from '@nestjs/common';
import { StockService } from '../services/stock.service';
import { StockController } from '../controllers/stock.controller';
import { StockProvider } from '../providers/stock.providers';
import { Stock } from '../entities/stock.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Stock])],
  controllers: [StockController],
  providers: [
    StockService,
    ...StockProvider,  
  ],
})
export class StockModule {}
