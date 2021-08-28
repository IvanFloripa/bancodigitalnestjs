import { Repository } from 'typeorm';
import { ContaCorrente } from './conta-corrente.entity';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
export declare class ContaCorrenteRepository extends Repository<ContaCorrente> {
    createContaCorrente(createContaCorrenteDto: CreateContaCorrenteDto): Promise<ContaCorrente>;
}
