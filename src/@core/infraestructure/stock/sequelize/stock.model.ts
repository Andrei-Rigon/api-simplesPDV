import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'stock',
  timestamps: true, // created_at / updated_at
  paranoid: true, // soft delete -> deleted_at
  underscored: true, // usa snake_case nas colunas (created_at, deleted_at, etc.)
})
export class Stock extends Model<Stock> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  declare id: number;

  // Produto
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

  // Preço de custo
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  })
  cost_price!: string;

  // Preço de venda
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  })
  sale_price!: string;

  // Lucro (sale_price - cost_price)
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  })
  profit!: string;

  // Qtde (3 casas para aceitar KG, LT etc.)
  @Column({
    type: DataType.DECIMAL(10, 3),
    allowNull: false,
    defaultValue: 0,
  })
  quantity!: string;

  // Qtde mínima
  @Column({
    type: DataType.DECIMAL(10, 3),
    allowNull: true,
    defaultValue: 0,
  })
  min_quantity!: string | null;

  // Código de barras (EAN-8, EAN-13, GTIN-14)
  @Column({
    type: DataType.STRING(14),
    allowNull: true,
    unique: true,
  })
  barcode!: string | null;

  // UN (UN, KG, LT, CX, PC...)
  @Column({
    type: DataType.STRING(6),
    allowNull: false,
    defaultValue: 'UN',
  })
  unit!: string;

  // Código interno
  @Column({
    type: DataType.STRING(50),
    allowNull: true,
    unique: true,
  })
  internal_code!: string | null;
}