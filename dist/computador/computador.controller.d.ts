import { ComputadorService } from './computador.service';
import { Computador } from './computador.entity';
export declare class ComputadorController {
    private readonly computadorService;
    constructor(computadorService: ComputadorService);
    findAll(): Promise<Computador[]>;
    findOne(id: string): Promise<Computador>;
    create(computador: Computador): Promise<Computador>;
    update(id: string, computador: Computador): Promise<void>;
    remove(id: string): Promise<void>;
}
