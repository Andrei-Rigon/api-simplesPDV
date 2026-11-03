import { Inject, Injectable } from '@nestjs/common';
import { CreateStockDto } from '../dto/create-stock.dto';
import { UpdateStockDto } from '../dto/update-stock.dto';
import type { StockRepositoryInterface } from '../repositories/stock.repositories';

@Injectable()
export class StockService {

  constructor(
    @Inject('STOCK_REPOSITORY')
    private readonly stockRepositories: StockRepositoryInterface
  ){}

  create(createStockDto: CreateStockDto) {
    return this.stockRepositories.create(createStockDto)
  }

  findAll() {
    return this.stockRepositories.findAll();
  }

  findOne(id: number) {
    return this.stockRepositories.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return this.stockRepositories.update(updateStockDto, {
      where: {
        id
      }
    })
  }

  remove(id: number) {
    return this.stockRepositories.destroy({
      where: {
        id
      }
    })
  }
}
