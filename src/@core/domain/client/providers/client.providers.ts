import { Client } from "../entities/client.entity";

export const ClientsProvider = [
    {
        provide: 'CLIENTS_REPOSITORY',
        useValue: Client
    }
]