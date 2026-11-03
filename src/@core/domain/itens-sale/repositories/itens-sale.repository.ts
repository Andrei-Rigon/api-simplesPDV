import { FindOptions, UpdateOptions } from "sequelize";
import { CreateItensSaleDto } from "../dto/create-itens-sale.dto";
import { SaleItem } from "../entities/itens-sale.entity";

export interface ItensSaleRepositoryInterface {
    findOne(query: FindOptions): Promise<SaleItem>;
    findAll(query?: FindOptions): Promise<SaleItem>;
    create(user: CreateItensSaleDto): Promise<SaleItem>;
    update(values: any, query: UpdateOptions): Promise<SaleItem>;
    destroy(query: UpdateOptions): Promise<SaleItem>;
}