import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalePaymentsService } from '../services/sale-payments.service';
import { CreateSalePaymentDto } from '../dto/create-sale-payment.dto';
import { UpdateSalePaymentDto } from '../dto/update-sale-payment.dto';

@Controller('sale-payments')
export class SalePaymentsController {
  constructor(private readonly salePaymentsService: SalePaymentsService) {}

  @Post()
  create(@Body() createSalePaymentDto: CreateSalePaymentDto) {
    return this.salePaymentsService.create(createSalePaymentDto);
  }

  @Get()
  findAll() {
    return this.salePaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salePaymentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalePaymentDto: UpdateSalePaymentDto) {
    return this.salePaymentsService.update(+id, updateSalePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salePaymentsService.remove(+id);
  }
}
