import { Inject, Injectable } from '@nestjs/common';
import { CreateSpecieDto } from '../dto/create-specie.dto';
import { UpdateSpecieDto } from '../dto/update-specie.dto';
import type { SpecieRepositoryInterface } from '../respositories/specie.repositories';


@Injectable()
export class SpecieService {

  constructor(
    @Inject('SPECIES_REPOSITORY')
    private readonly specieRepository: SpecieRepositoryInterface
  ) {}

  create(createSpecieDto: CreateSpecieDto) {
    return this.specieRepository.create(createSpecieDto);
  }

  findAll() {
    return this.specieRepository.findAll();
  }

  findOne(id: number) {
    return this.specieRepository.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateSpecieDto: UpdateSpecieDto) {
    return this.specieRepository.update(updateSpecieDto, {
      where: {
        id
      }
    })
  }

  remove(id: number) {
    return this.specieRepository.destroy({
      where: {
        id
      }
    })
  }
}
