import { EntityRepository, Repository } from 'typeorm';
import { ContaCorrente } from './conta-corrente.entity';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';

import {
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(ContaCorrente)
export class ContaCorrenteRepository extends Repository<ContaCorrente> {
  async createContaCorrente(
    createContaCorrenteDto: CreateContaCorrenteDto,
  ): Promise<ContaCorrente> {
    const { conta, valor, saldo } = createContaCorrenteDto;

    const contaCorrente = this.create();
    contaCorrente.conta = conta;
    contaCorrente.saldo = saldo;
   
    try {
      await contaCorrente.save();
      return contaCorrente;
    } catch (error) {

        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
    }
  }
}