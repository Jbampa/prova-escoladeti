import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputadorModule } from './computador/computador.module';
import { PerifericoModule } from './periferico/periferico.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'computador_periferico',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ComputadorModule, 
    PerifericoModule,
  ],
})
export class AppModule {}
