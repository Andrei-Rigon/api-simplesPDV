import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from '../../users/entities/user.entity';
import { UsersService } from '../../users/services/users.service';
import { UsersModule } from '../../users/module/users.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../authGuard';
import { ConfigService } from '@nestjs/config';



@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET_TOKEN'),
        signOptions: { expiresIn: '6000s' },
      }),      
    }),
  
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
    ],
  exports: [AuthService],
})
export class AuthModule {}
