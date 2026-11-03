import { Module } from '@nestjs/common';
import { SalePaymentsService } from '../services/sale-payments.service';
import { SalePaymentsController } from '../controllers/sale-payments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SalePayment } from '../entities/sale-payment.entity';
import { SalePaymentProvider } from '../providers/sale-payment.provider';

@Module({
  imports: [SequelizeModule.forFeature([SalePayment])],
  controllers: [SalePaymentsController],
  providers: [
    SalePaymentsService,
    ...SalePaymentProvider
  ],

})
export class SalePaymentsModule {}
