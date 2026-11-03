import { FindOptions, UpdateOptions } from "sequelize";
import { CreateClientDto } from "../dto/create-client.dto";
import { Client } from "../entities/client.entity";

export interface ClientRepositoryInterface {
    findOne(query: FindOptions): Promise<Client>;
    findAll(query?: FindOptions): Promise<Client>;
    create(user: CreateClientDto): Promise<Client>;
    update(values: any, query: UpdateOptions): Promise<Client>;
    destroy(query: UpdateOptions): Promise<Client>;
}