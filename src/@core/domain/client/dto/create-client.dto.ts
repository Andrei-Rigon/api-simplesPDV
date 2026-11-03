import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty({ message: 'name é obrigatório' })
  @MaxLength(255)
  name!: string;

  @IsOptional()
  @Matches(/^\d{11}$/, { message: 'cpf deve conter 11 dígitos' })
  cpf?: string | null;

  @IsOptional()
  @IsDateString(
    { strict: true },
    { message: 'birth_date deve estar no formato YYYY-MM-DD' },
  )
  birth_date?: string | null;

  @IsOptional()
  @Matches(/^\d{10,20}$/, { message: 'phone deve conter entre 10 e 20 dígitos' })
  phone?: string | null;

  @IsOptional()
  @IsEmail({}, { message: 'email inválido' })
  @MaxLength(255)
  email?: string | null;

  @IsOptional()
  @Matches(/^\d{8}$/, { message: 'zip_code deve conter 8 dígitos' })
  zip_code?: string | null;

  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toUpperCase() : value,
  )
  @Length(2, 2, { message: 'state deve ter 2 caracteres (UF)' })
  @Matches(/^[A-Z]{2}$/, { message: 'state deve ser uma UF válida, ex: SC' })
  state?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  city?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  neighborhood?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  street?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  street_number?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  complement?: string | null;
}