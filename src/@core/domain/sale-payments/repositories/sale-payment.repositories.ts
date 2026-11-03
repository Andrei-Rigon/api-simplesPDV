import { FindOptions, UpdateOptions } from "sequelize";
import { CreateSalePaymentDto } from "../dto/create-sale-payment.dto";
import { SalePayment } from "../entities/sale-payment.entity";

export interface SalePaymentsRepositoryInterface {
    findOne(query: FindOptions): Promise<SalePayment>;
    findAll(query?: FindOptions): Promise<SalePayment>;
    create(user: CreateSalePaymentDto): Promise<SalePayment>;
    update(values: any, query: UpdateOptions): Promise<SalePayment>;
    destroy(query: UpdateOptions): Promise<SalePayment>;
}