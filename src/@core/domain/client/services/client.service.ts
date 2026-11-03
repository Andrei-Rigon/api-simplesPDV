import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import type { ClientRepositoryInterface } from '../repositories/client.repositories';

@Injectable()
export class ClientService {

  constructor(
    @Inject('CLIENTS_REPOSITORY')
    private readonly clientsRepositories: ClientRepositoryInterface
  ) {}

  create(createClientDto: CreateClientDto) {
    return this.clientsRepositories.create(createClientDto)
  }

  findAll() {
    return this.clientsRepositories.findAll();
  }

  findOne(id: number) {
    return this.clientsRepositories.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientsRepositories.update(updateClientDto, {
      where: {
        id
      }
    })
  }

  remove(id: number) {
    return this.clientsRepositories.destroy({
      where: {
        id
      }
    })
  }
}
