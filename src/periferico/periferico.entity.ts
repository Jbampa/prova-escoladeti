import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Computador } from '../computador/computador.entity';

@Entity()
export class Periferico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Computador, (computador) => computador.perifericos, { onDelete: 'CASCADE' })
  computador: Computador;
}
