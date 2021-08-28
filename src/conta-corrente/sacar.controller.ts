import { Controller, Post, Body } from '@nestjs/common';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
import { ContaCorrenteService } from './conta-corrente.service';
import { ReturnContaCorrenteDto } from './dtos/return-conta-corrente.dto';

@Controller('conta-corrente')
export class ContaCorrenteController {
  constructor(private contaCorrenteService: ContaCorrenteService) {}

  @Post()
  async createContaCorrente(
    @Body() createContaCorrenteDto: CreateContaCorrenteDto,
  ): Promise<ReturnContaCorrenteDto> {
    const contaCorrente = await this.contaCorrenteService.createContaCorrente(createContaCorrenteDto);
    return {
        contaCorrente,
        message: 'Conta Corrente Cadastrada com Sucesso',
    };
  }
}