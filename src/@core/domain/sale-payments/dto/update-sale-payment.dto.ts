import { PartialType } from '@nestjs/mapped-types';
import { CreateSalePaymentDto } from './create-sale-payment.dto';

export class UpdateSalePaymentDto extends PartialType(CreateSalePaymentDto) {}
