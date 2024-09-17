import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Computador } from './computador.entity';

@Injectable()
export class ComputadorService {
  constructor(
    @InjectRepository(Computador)
    private computadorRepository: Repository<Computador>, 
  ) {}

  findAll(): Promise<Computador[]> {
    return this.computadorRepository.find({ relations: ['perifericos'] });
  }

  findOne(id: number): Promise<Computador> {
    return this.computadorRepository.findOne({
      where: { id },
      relations: ['perifericos'],
    });
  }

  create(computador: Computador): Promise<Computador> {
    return this.computadorRepository.save(computador);
  }

  async update(id: number, computador: Computador): Promise<void> {
    await this.computadorRepository.update(id, computador);
  }

  async remove(id: number): Promise<void> {
    const computador = await this.computadorRepository.findOne({ where: { id }, relations: ['perifericos'] });
  
    if (!computador) {
      throw new Error('Computador não encontrado');
    }
  
    await this.computadorRepository.remove(computador);
  }
}
