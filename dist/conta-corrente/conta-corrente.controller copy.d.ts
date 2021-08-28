import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
import { ContaCorrenteService } from './conta-corrente.service';
import { ReturnContaCorrenteDto } from './dtos/return-conta-corrente.dto';
export declare class ContaCorrenteController {
    private contaCorrenteService;
    constructor(contaCorrenteService: ContaCorrenteService);
    createContaCorrente(createContaCorrenteDto: CreateContaCorrenteDto): Promise<ReturnContaCorrenteDto>;
}
