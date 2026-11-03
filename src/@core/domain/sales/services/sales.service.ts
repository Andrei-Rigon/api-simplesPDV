import { Inject, Injectable } from '@nestjs/common';
import { CreateSaleDto } from '../dto/create-sale.dto';
import { UpdateSaleDto } from '../dto/update-sale.dto';
import type { SaleRepositoryInterface } from '../repositories/sales.repositories';


@Injectable()
export class SalesService {

  constructor(
    @Inject('SALES_REPOSITORY')
    private readonly salesRepositories: SaleRepositoryInterface
  ){}

  create(createSaleDto: CreateSaleDto) {
    return this.salesRepositories.create(createSaleDto)
  }

  findAll() {
    return this.salesRepositories.findAll()
  }

  findOne(id: number) {
    return this.salesRepositories.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.salesRepositories.update(updateSaleDto, {
      where: {
        id
      }
    })
  }

  remove(id: number) {
    return this.salesRepositories.destroy({
      where: {
        id
      }
    })
  }
}
