import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  Min,
} from 'class-validator';
import { SaleStatus } from '../../../infraestructure/sales/sequelize/sales.model';

export class CreateSaleDto {
  // Total da venda
  @IsOptional()
  @IsNumberString(
    {},
    { message: 'total deve ser um valor numérico válido' },
  )
  total?: string;

  // Total de acréscimo da venda
  @IsOptional()
  @IsNumberString(
    {},
    { message: 'total_addition deve ser um valor numérico válido' },
  )
  total_addition?: string;

  // Total de acréscimo dos itens
  @IsOptional()
  @IsNumberString(
    {},
    { message: 'total_item_addition deve ser um valor numérico válido' },
  )
  total_item_addition?: string;

  // Total de desconto da venda
  @IsOptional()
  @IsNumberString(
    {},
    { message: 'total_discount deve ser um valor numérico válido' },
  )
  total_discount?: string;

  // Total de desconto dos itens
  @IsOptional()
  @IsNumberString(
    {},
    { message: 'total_item_discount deve ser um valor numérico válido' },
  )
  total_item_discount?: string;

  // Status
  @IsOptional()
  @IsEnum(SaleStatus, {
    message: 'status deve ser open, finished ou canceled',
  })
  status?: SaleStatus;

  // Cliente (opcional)
  @IsOptional()
  @IsInt({ message: 'customer_id deve ser um número inteiro válido' })
  @Min(1, { message: 'customer_id deve ser maior que zero' })
  customer_id?: number | null;

  // Usuário responsável pela venda
  @IsInt({ message: 'user_id deve ser um número inteiro válido' })
  @Min(1, { message: 'user_id deve ser maior que zero' })
  user_id!: number;

  // Forma de pagamento (opcional)
  @IsOptional()
  @IsInt({ message: 'payment_id deve ser um número inteiro válido' })
  @Min(1, { message: 'payment_id deve ser maior que zero' })
  payment_id?: number | null;
}