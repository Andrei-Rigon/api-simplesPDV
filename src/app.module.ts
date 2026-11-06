import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './@core/domain/client/module/client.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './@core/domain/auth/module/auth.module';
import { UsersModule } from './@core/domain/users/module/users.module';
import { StockModule } from './@core/domain/stock/module/stock.module';
import { SalesModule } from './@core/domain/sales/module/sales.module';
import { SpecieModule } from './@core/domain/specie/modules/specie.module';
import { ItensSaleModule } from './@core/domain/itens-sale/module/itens-sale.module';
import { SalePaymentsModule } from './@core/domain/sale-payments/module/sale-payments.module';
import { SpecieControllerTsController } from './@core/domain/specie/specie.controller.ts/specie.controller.ts.controller';
import { SpecieModule } from './@core/domain/specie/specie.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true// Deixar global
    }),

    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),

        autoLoadModels: true,
        synchronize: true, // Não pode subir pra prod
      }),
    }),
    ClientModule,
    AuthModule,
    UsersModule,
    StockModule,
    SalesModule,
    SpecieModule,
    ItensSaleModule,
    SalePaymentsModule
  ],
  controllers: [AppController, SpecieControllerTsController],
  providers: [AppService],
})
export class AppModule {}
