import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService
    ){}

    async signIn(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(email);
        
        if(!user || !(await bcrypt.compare(password, user?.password))) {
            throw new UnauthorizedException
        }         
        const payload = { sub: user.id, name: user.name};
        return {
            access_token: await this.jwtService.signAsync(payload)
        }   

    }
}
