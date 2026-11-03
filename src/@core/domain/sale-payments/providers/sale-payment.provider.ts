import { SalePayment } from "../entities/sale-payment.entity";

export const SalePaymentProvider = [
    {
        provide: 'SALE_PAYMENT_REPOSITORY',
        useValue: SalePayment
    }
]