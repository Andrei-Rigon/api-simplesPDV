import {
  IsInt,
  IsNotEmpty,
  IsNumberString,
  Min,
  IsOptional
} from 'class-validator';

export class CreateSalePaymentDto {
  // Valor pago
  @IsNotEmpty({ message: 'amountPaid é obrigatório' })
  @IsNumberString(
    {},
    { message: 'amountPaid deve ser um valor numérico válido' },
  )
  amountPaid!: string;

  // Valor do troco
  @IsOptional()
  @IsNumberString(
    {},
    { message: 'changeAmount deve ser um valor numérico válido' },
  )
  changeAmount?: string;

  // ID da venda
  @IsInt({ message: 'saleId deve ser um número inteiro válido' })
  @Min(1, { message: 'saleId deve ser maior que zero' })
  saleId!: number;

  // ID da forma de pagamento
  @IsInt({ message: 'speciesId deve ser um número inteiro válido' })
  @Min(1, { message: 'speciesId deve ser maior que zero' })
  speciesId!    : number;
}