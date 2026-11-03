import { Users } from "../entities/user.entity";

export const UsersProvider = [
    {
        provide: 'USERS_REPOSITORY',
        useValue: Users
    }
]