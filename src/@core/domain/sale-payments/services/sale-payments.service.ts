import { Inject, Injectable } from '@nestjs/common';
import { CreateSalePaymentDto } from '../dto/create-sale-payment.dto';
import { UpdateSalePaymentDto } from '../dto/update-sale-payment.dto';
import type { SalePaymentsRepositoryInterface } from '../repositories/sale-payment.repositories';

@Injectable()
export class SalePaymentsService {

  constructor(
    @Inject('SALE_PAYMENT_REPOSITORY')
    private readonly salePaymentRepositories: SalePaymentsRepositoryInterface
  ){}

  create(createSalePaymentDto: CreateSalePaymentDto) {
    return this.salePaymentRepositories.create(createSalePaymentDto)
  }

  findAll() {
    return this.salePaymentRepositories.findAll()
  }

  findOne(id: number) {
    return this.salePaymentRepositories.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateSalePaymentDto: UpdateSalePaymentDto) {
    return this.salePaymentRepositories.update(updateSalePaymentDto, {
      where: {
        id
      }
    })
  }

  remove(id: number) {
    return this.salePaymentRepositories.destroy({
      where: {
        id  
      }
    })
  }
}
