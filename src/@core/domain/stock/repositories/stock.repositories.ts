import { FindOptions, UpdateOptions } from "sequelize";
import { CreateStockDto } from "../dto/create-stock.dto";
import { Stock } from "../entities/stock.entity";

export interface StockRepositoryInterface {
    findOne(query: FindOptions): Promise<Stock>;
    findAll(query?: FindOptions): Promise<Stock>;
    create(user: CreateStockDto): Promise<Stock>;
    update(values: any, query: UpdateOptions): Promise<Stock>;
    destroy(query: UpdateOptions): Promise<Stock>;
}