import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputadorService } from './computador.service';
import { ComputadorController } from './computador.controller';
import { Computador } from './computador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Computador])], 
  providers: [ComputadorService],
  controllers: [ComputadorController],
})
export class ComputadorModule {}
