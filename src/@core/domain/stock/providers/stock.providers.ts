import { Stock } from "../entities/stock.entity";

export const StockProvider = [
    {
        provide: 'STOCK_REPOSITORY',
        useValue: Stock
    }
]