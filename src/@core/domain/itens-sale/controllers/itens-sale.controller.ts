import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItensSaleService } from '../services/itens-sale.service';
import { CreateItensSaleDto } from '../dto/create-itens-sale.dto';
import { UpdateItensSaleDto } from '../dto/update-itens-sale.dto';

@Controller('itens-sale')
export class ItensSaleController {
  constructor(private readonly itensSaleService: ItensSaleService) {}

  @Post()
  create(@Body() createItensSaleDto: CreateItensSaleDto) {
    return this.itensSaleService.create(createItensSaleDto);
  }

  @Get()
  findAll() {
    return this.itensSaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itensSaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItensSaleDto: UpdateItensSaleDto) {
    return this.itensSaleService.update(+id, updateItensSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itensSaleService.remove(+id);
  }
}
