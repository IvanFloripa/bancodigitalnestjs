import { EntityRepository, Repository } from 'typeorm';
import { ContaCorrente } from './conta-corrente.entity';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';

import {
  InternalServerErrorException, NotFoundException,
} from '@nestjs/common';

@EntityRepository(ContaCorrente)
export class ContaCorrenteRepository extends Repository<ContaCorrente> {
  async createContaCorrente(
    createContaCorrenteDto: CreateContaCorrenteDto,
  ): Promise<ContaCorrente> {
    const { conta } = createContaCorrenteDto;

    const contaCorrente = this.create();
    contaCorrente.conta = conta;
   
    try {
      await contaCorrente.save();
      return contaCorrente;
    } catch (error) {

        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
    }
  }

  async findConta(
    contaCorrenteDto: ContaCorrenteDto,
    conta: string
  ){
    const contaCorrente = await this.findOne({ where:
      { conta: conta} });
    if (!contaCorrente) throw new NotFoundException('Conta Corrente não encontrada');

  }
  
}