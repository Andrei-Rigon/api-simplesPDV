import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'customers',
  timestamps: true, // created_at / updated_at
  paranoid: true, // soft delete -> deleted_at
  underscored: true, // usa snake_case nas colunas (created_at, deleted_at, etc.)
})
export class Client extends Model<Client> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  declare id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(11),
    allowNull: true,
  })
  cpf!: string | null;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  birth_date!: string | null;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  phone!: string | null;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  email!: string | null;

  @Column({
    type: DataType.STRING(8),
    allowNull: true,
  })
  zip_code!: string | null;

  @Column({
    type: DataType.CHAR(2),
    allowNull: true,
  })
  state!: string | null;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  city!: string | null;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  neighborhood!: string | null;

  @Column({
    type: DataType.STRING(150),
    allowNull: true,
  })
  street!: string | null;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  street_number!: string | null;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  complement!: string | null;
}
