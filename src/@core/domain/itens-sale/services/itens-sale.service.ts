import { Inject, Injectable } from '@nestjs/common';
import { CreateItensSaleDto } from '../dto/create-itens-sale.dto';
import { UpdateItensSaleDto } from '../dto/update-itens-sale.dto';
import type { ItensSaleRepositoryInterface } from '../repositories/itens-sale.repository';


@Injectable()
export class ItensSaleService {

  constructor(
    @Inject('SALE_ITEM_REPOSITORY')
    private readonly saleItemRepositories: ItensSaleRepositoryInterface
  ){

  }

  create(createItensSaleDto: CreateItensSaleDto) {
    return this.saleItemRepositories.create(createItensSaleDto);
  }

  findAll() {
    return this.saleItemRepositories.findAll()
  }

  findOne(id: number) {
    return this.saleItemRepositories.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateItensSaleDto: UpdateItensSaleDto) {
    return this.saleItemRepositories.update(updateItensSaleDto, {
      where: {
        id
      }
    })
  }

  remove(id: number) {
    return this.saleItemRepositories.destroy({
      where: {
        id
      }
    })
  }
}
