import { PartialType } from '@nestjs/mapped-types';
import { CreateItensSaleDto } from './create-itens-sale.dto';

export class UpdateItensSaleDto extends PartialType(CreateItensSaleDto) {}
