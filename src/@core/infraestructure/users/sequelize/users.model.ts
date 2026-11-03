import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true, // created_at / updated_at
  paranoid: true, // soft delete -> deleted_at
  underscored: true, // usa snake_case nas colunas (created_at, deleted_at, etc.)
})
export class Users extends Model<Users> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  declare id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true
  })
  declare email: string;

@Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare password: string;

}