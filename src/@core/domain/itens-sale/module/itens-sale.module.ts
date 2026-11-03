import { Module } from '@nestjs/common';
import { ItensSaleService } from '../services/itens-sale.service';
import { ItensSaleController } from '../controllers/itens-sale.controller';
import { SaleItemProvider } from '../providers/itens-sale.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { SaleItem } from '../entities/itens-sale.entity';

@Module({
  imports: [SequelizeModule.forFeature([SaleItem])],
  controllers: [ItensSaleController],
  providers: [
    ItensSaleService,
    ...SaleItemProvider
  ],
})
export class ItensSaleModule {}
