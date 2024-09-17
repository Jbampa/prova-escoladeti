import { Repository } from 'typeorm';
import { Periferico } from './periferico.entity';
export declare class PerifericoService {
    private readonly perifericoRepository;
    constructor(perifericoRepository: Repository<Periferico>);
    create(periferico: Periferico): Promise<Periferico>;
    findAll(): Promise<Periferico[]>;
    findOne(id: number): Promise<Periferico>;
    update(id: number, periferico: Periferico): Promise<void>;
    remove(id: number): Promise<void>;
}
