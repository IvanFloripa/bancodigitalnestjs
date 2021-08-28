import { ContaCorrente } from './conta-corrente.entity';
import { ContaCorrenteRepository } from './conta-corrente.repository';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';
export declare class ContaCorrenteService {
    private contaCorrenteRepository;
    constructor(contaCorrenteRepository: ContaCorrenteRepository);
    createContaCorrente(createContaCorrenteDto: CreateContaCorrenteDto): Promise<ContaCorrente>;
    findConta(conta: string): Promise<ContaCorrente>;
    saldoSuficiente(valor: number, saldo: number): Promise<boolean>;
    sacarContaCorrente(contaCorrenteDto: ContaCorrenteDto, conta: string): Promise<Object>;
    depositarContaCorrente(contaCorrenteDto: ContaCorrenteDto, conta: string): Promise<Object>;
}
