import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Periferico } from '../periferico/periferico.entity';

@Entity()
export class Computador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cor: string;

  @Column()
  dataFabricacao: number;

  @OneToMany(() => Periferico, (periferico) => periferico.computador, { cascade: true, onDelete: 'CASCADE' })
  perifericos: Periferico[];
}
