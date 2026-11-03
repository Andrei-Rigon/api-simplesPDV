import { SaleItem } from "../entities/itens-sale.entity";

export const SaleItemProvider = [
    {
        provide: 'SALE_ITEM_REPOSITORY',
        useValue: SaleItem
    }
]