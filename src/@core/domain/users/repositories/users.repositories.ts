import { FindOptions, UpdateOptions } from "sequelize";
import { CreateUserDto } from "../dto/create-user.dto";
import { Users } from "../entities/user.entity";

export interface UsersRepositoryInterface {
    findOne(query: FindOptions): Promise<Users>;
    findAll(query?: FindOptions): Promise<Users>;
    create(user: CreateUserDto): Promise<Users>;
    update(values: any, query: UpdateOptions): Promise<Users>;
    destroy(query: UpdateOptions): Promise<Users>;
}