import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateStockDto {
  @IsString()
  @IsNotEmpty({ message: 'name é obrigatório' })
  @MaxLength(255)
  name!: string;

  // Preço de custo
  @IsOptional()
  @Matches(/^\d{1,8}(\.\d{1,2})?$/, {
    message: 'cost_price deve ser um valor monetário válido',
  })
  cost_price?: string;

  // Preço de venda
  @IsOptional()
  @Matches(/^\d{1,8}(\.\d{1,2})?$/, {
    message: 'sale_price deve ser um valor monetário válido',
  })
  sale_price?: string;

  // Lucro
  @IsOptional()
  @Matches(/^\d{1,8}(\.\d{1,2})?$/, {
    message: 'profit deve ser um valor monetário válido',
  })
  profit?: string;

  // Quantidade
  @IsOptional()
  @Matches(/^\d{1,7}(\.\d{1,3})?$/, {
    message: 'quantity deve ser um valor numérico com até 3 casas decimais',
  })
  quantity?: string;

  // Quantidade mínima
  @IsOptional()
  @Matches(/^\d{1,7}(\.\d{1,3})?$/, {
    message: 'min_quantity deve ser um valor numérico com até 3 casas decimais',
  })
  min_quantity?: string | null;

  // Código de barras
  @IsOptional()
  @Matches(/^(\d{8}|\d{12,14})$/, {
    message: 'barcode deve conter 8, 12, 13 ou 14 dígitos',
  })
  barcode?: string | null;

  // Unidade
  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toUpperCase() : value,
  )
  @IsString()
  @MaxLength(6)
  @IsNotEmpty({ message: 'unit não pode ser vazio' })
  unit?: string;

  // Código interno
  @IsOptional()
  @IsString()
  @MaxLength(50)
  internal_code?: string | null;
}