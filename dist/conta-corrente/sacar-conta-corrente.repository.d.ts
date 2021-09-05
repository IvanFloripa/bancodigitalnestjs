import { Repository } from 'typeorm';
import { ContaCorrente } from './conta-corrente.entity';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';
export declare class SacarContaCorrenteRepository extends Repository<ContaCorrente> {
    sacarContaCorrente(contaCorrenteDto: ContaCorrenteDto): Promise<Object>;
}
