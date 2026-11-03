import { FindOptions, UpdateOptions } from "sequelize";
import { CreateSaleDto } from "../dto/create-sale.dto";
import { Sales } from "../entities/sales.entity";

export interface SaleRepositoryInterface {
    findOne(query: FindOptions): Promise<Sales>;
    findAll(query?: FindOptions): Promise<Sales>;
    create(user: CreateSaleDto): Promise<Sales>;
    update(values: any, query: UpdateOptions): Promise<Sales>;
    destroy(query: UpdateOptions): Promise<Sales>;
}