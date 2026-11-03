import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Client } from '../../clients/sequelize/clients.model';
import { Users } from '../../users/sequelize/users.model';

export enum SaleStatus {
  OPEN = 'open', // em aberto
  FINISHED = 'finished', // finalizada
  CANCELED = 'canceled', // cancelada
}

@Table({
  tableName: 'sales',
  timestamps: true, // created_at / updated_at
  paranoid: true, // soft delete -> deleted_at
  underscored: true, // usa snake_case nas colunas (created_at, deleted_at, etc.)
})
export class Sales extends Model<Sales> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  declare id: number;

  // Total da venda
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  })
  total!: string;

  // Total acréscimo (na venda)
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  })
  total_addition!: string;

  // Total acréscimo do item (soma dos acréscimos dos itens)
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  })
  total_item_addition!: string;

  // Total de desconto da venda
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  })
  total_discount!: string;

  // Total de desconto do item (soma dos descontos dos itens)
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  })
  total_item_discount!: string;

  // Status
  @Column({
    type: DataType.ENUM(...Object.values(SaleStatus)),
    allowNull: false,
    defaultValue: SaleStatus.OPEN,
  })
  status!: SaleStatus;

  // Id cliente (venda pode ser sem cliente identificado)
  @ForeignKey(() => Client)
  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  customer_id!: number | null;

  @BelongsTo(() => Client)
  customer?: Client;

  // Id usuário (quem fez a venda)
  @ForeignKey(() => Users)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  user_id!: number;

  @BelongsTo(() => Users)
  user?: Users;

  // Id pagamento (forma de pagamento)
  // Quando existir o model Payment: @ForeignKey(() => Payment) + @BelongsTo(() => Payment)
  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  payment_id!: number | null;
}