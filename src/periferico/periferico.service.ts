import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Periferico } from './periferico.entity';

@Injectable()
export class PerifericoService {
  constructor(
    @InjectRepository(Periferico)
    private readonly perifericoRepository: Repository<Periferico>,
  ) {}

  // Criar um periférico
  create(periferico: Periferico): Promise<Periferico> {
    return this.perifericoRepository.save(periferico);
  }

  // Buscar todos os periféricos
  findAll(): Promise<Periferico[]> {
    return this.perifericoRepository.find();
  }

  // Buscar um periférico por ID
  findOne(id: number): Promise<Periferico> {
    return this.perifericoRepository.findOne({ where: { id } });
  }

  // Atualizar um periférico
  async update(id: number, periferico: Periferico): Promise<void> {
    await this.perifericoRepository.update(id, periferico);
  }

  // Remover um periférico
  async remove(id: number): Promise<void> {
    await this.perifericoRepository.delete(id);
  }
}
