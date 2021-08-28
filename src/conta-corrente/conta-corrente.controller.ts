import { Controller, Post, Body, Get, Param, Patch} from '@nestjs/common';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
import { ContaCorrenteService } from './conta-corrente.service';
import { ReturnContaCorrenteDto } from './dtos/return-conta-corrente.dto';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';

@Controller('conta-corrente')
export class ContaCorrenteController {
  constructor(private contaCorrenteService: ContaCorrenteService) {}

  @Post()
  async createContaCorrente(
    @Body() createContaCorrenteDto: CreateContaCorrenteDto
  ): Promise<ReturnContaCorrenteDto> {
    const contaCorrente = await this.contaCorrenteService.createContaCorrente(createContaCorrenteDto);
    return {
        contaCorrente,
        message: 'Conta Corrente Cadastrada com Sucesso',
    };
  }

  @Patch(['sacar/:conta'])
    async sacarContaCorrente(
      @Param('conta') conta, 
      @Body() contaCorrenteDto: ContaCorrenteDto
    ): Promise<any> {
        return this.contaCorrenteService.sacarContaCorrente(contaCorrenteDto,conta);
    }
  @Patch(['depositar/:conta'])
    async depositarContaCorrente(
      @Param('conta') conta, 
      @Body() contaCorrenteDto: ContaCorrenteDto
    ): Promise<any> {
        return this.contaCorrenteService.depositarContaCorrente(contaCorrenteDto,conta);
    }
  
  @Get(['saldo/:conta'])
    async saldoContaCorrente(
      @Param('conta') conta, 
      @Body() contaCorrenteDto: ContaCorrenteDto
    ): Promise<any> {
        return this.contaCorrenteService.saldoContaCorrente(contaCorrenteDto,conta);
    }

}