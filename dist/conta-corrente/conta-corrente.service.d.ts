import { ContaCorrente } from './conta-corrente.entity';
import { ContaCorrenteRepository } from './conta-corrente.repository';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';
export declare class ContaCorrenteService {
    private contaCorrenteRepository;
    constructor(contaCorrenteRepository: ContaCorrenteRepository);
    createContaCorrente(createContaCorrenteDto: CreateContaCorrenteDto): Promise<ContaCorrente>;
    findConta(conta: string): Promise<ContaCorrente>;
    sacarContaCorrente(contaCorrenteDto: ContaCorrenteDto, conta: string): Promise<ContaCorrente>;
    depositarContaCorrente(contaCorrenteDto: ContaCorrenteDto, conta: string): Promise<ContaCorrente>;
}
