import { PerifericoService } from './periferico.service';
import { Periferico } from './periferico.entity';
export declare class PerifericoController {
    private readonly perifericoService;
    constructor(perifericoService: PerifericoService);
    findAll(): Promise<Periferico[]>;
    findOne(id: string): Promise<Periferico>;
    create(periferico: Periferico): Promise<Periferico>;
    update(id: string, periferico: Periferico): Promise<void>;
    remove(id: string): Promise<void>;
}
