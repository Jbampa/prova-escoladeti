import { Repository } from 'typeorm';
import { Computador } from './computador.entity';
export declare class ComputadorService {
    private computadorRepository;
    constructor(computadorRepository: Repository<Computador>);
    findAll(): Promise<Computador[]>;
    findOne(id: number): Promise<Computador>;
    create(computador: Computador): Promise<Computador>;
    update(id: number, computador: Computador): Promise<void>;
    remove(id: number): Promise<void>;
}
