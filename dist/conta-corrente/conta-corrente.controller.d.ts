import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
import { ContaCorrenteService } from './conta-corrente.service';
import { ReturnContaCorrenteDto } from './dtos/return-conta-corrente.dto';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';
export declare class ContaCorrenteController {
    private contaCorrenteService;
    constructor(contaCorrenteService: ContaCorrenteService);
    createContaCorrente(createContaCorrenteDto: CreateContaCorrenteDto): Promise<ReturnContaCorrenteDto>;
    sacarContaCorrente(conta: any, contaCorrenteDto: ContaCorrenteDto): Promise<any>;
    depositarContaCorrente(conta: any, contaCorrenteDto: ContaCorrenteDto): Promise<any>;
    saldoContaCorrente(conta: any, contaCorrenteDto: ContaCorrenteDto): Promise<any>;
}
