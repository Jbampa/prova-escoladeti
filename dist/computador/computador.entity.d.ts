import { Periferico } from '../periferico/periferico.entity';
export declare class Computador {
    id: number;
    nome: string;
    cor: string;
    dataFabricacao: number;
    perifericos: Periferico[];
}
