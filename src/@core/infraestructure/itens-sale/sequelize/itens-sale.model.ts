import {
  Table, Column, Model, DataType, PrimaryKey, AutoIncrement,
  ForeignKey, BelongsTo, AllowNull, Default,
} from 'sequelize-typescript';
import { Sales } from '../../sales/sequelize/sales.model';
import { Stock } from '../../stock/sequelize/stock.model'; // ajuste o caminho/nome

@Table({
  tableName: 'sale_items',
  timestamps: true, // created_at / updated_at
  paranoid: true, // soft delete -> deleted_at
  underscored: true, // usa snake_case nas colunas (created_at, deleted_at, etc.)
})
export class SaleItem extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL(15, 3))
  declare quantity: number;

  @AllowNull(false)
  @Column({ type: DataType.DECIMAL(15, 2), field: 'unit_price' })
  declare unitPrice: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL(15, 2))
  declare total: number;

  @Default(0)
  @Column(DataType.DECIMAL(15, 2))
  declare discount: number;

  @Default(0)
  @Column(DataType.DECIMAL(15, 2))
  declare surcharge: number;

  @Column({ type: DataType.DECIMAL(15, 2), field: 'cost_price' })
  declare costPrice: number;

  @ForeignKey(() => Stock)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, field: 'product_id' })
  declare productId: number;

  @ForeignKey(() => Sales)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER, field: 'sale_id' })
  declare saleId: number;

  @BelongsTo(() => Stock)
  declare product: Stock;

  @BelongsTo(() => Sales)
  declare sale: Sales;
}