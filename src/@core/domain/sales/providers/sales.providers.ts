import { Sales } from "../entities/sales.entity";

export const SaleProvider = [
    {
        provide: 'SALES_REPOSITORY',
        useValue: Sales
    }
]