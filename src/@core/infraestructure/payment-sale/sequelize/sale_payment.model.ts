import {
  Table, Column, Model, DataType, PrimaryKey, AutoIncrement,
  ForeignKey, BelongsTo, AllowNull, Default,
} from 'sequelize-typescript';
import { Sales } from '../../sales/sequelize/sales.model';
import { Species } from '../../species/sequelize/species.model';

@Table({
  tableName: 'sales_payments',
  timestamps: true, // created_at / updated_at
  paranoid: true, // soft de        lete -> deleted_at
  underscored: true, // usa snake_case nas colunas (created_at, deleted_at, etc.)
})
export class SalePayment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column({ type: DataType.DECIMAL(15, 2), field: 'amount_paid' })
  declare amountPaid: number;

  @Default(0)
  @Column({ type: DataType.DECIMAL(15, 2), field: 'change_amount' })
  declare changeAmount: number;

  @ForeignKey(() => Sales)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, field: 'sale_id' })
  declare saleId: number;

  @ForeignKey(() => Species)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, field: 'species_id' })
  declare speciesId: number;

  @BelongsTo(() => Sales)
  declare sale: Sales;

  @BelongsTo(() => Species)
  declare species: Species;
}