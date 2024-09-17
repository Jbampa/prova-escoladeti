import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ComputadorService } from './computador.service';
import { Computador } from './computador.entity';

@Controller('computador')
export class ComputadorController {
  constructor(private readonly computadorService: ComputadorService) {}

  @Get()
  findAll() {
    return this.computadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.computadorService.findOne(+id);
  }

  @Post()
  create(@Body() computador: Computador) {
    return this.computadorService.create(computador);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() computador: Computador) {
    return this.computadorService.update(+id, computador);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.computadorService.remove(+id);
  }
}
