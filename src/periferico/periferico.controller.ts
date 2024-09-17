import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PerifericoService } from './periferico.service';
import { Periferico } from './periferico.entity';

@Controller('periferico')
export class PerifericoController {
  constructor(private readonly perifericoService: PerifericoService) {}

  @Get()
  findAll() {
    return this.perifericoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perifericoService.findOne(+id);
  }

  @Post()
  create(@Body() periferico: Periferico) {
    return this.perifericoService.create(periferico);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() periferico: Periferico) {
    return this.perifericoService.update(+id, periferico);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perifericoService.remove(+id);
  }
}
