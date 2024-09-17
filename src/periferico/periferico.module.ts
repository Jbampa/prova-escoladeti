import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerifericoService } from './periferico.service';
import { PerifericoController } from './periferico.controller';
import { Periferico } from './periferico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Periferico])], 
  providers: [PerifericoService], 
  controllers: [PerifericoController], 
})
export class PerifericoModule {}
