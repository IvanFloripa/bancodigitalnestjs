import { Injectable,   NotFoundException, InternalServerErrorException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContaCorrente } from './conta-corrente.entity';
import { ContaCorrenteRepository } from './conta-corrente.repository';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';

@Injectable()
export class ContaCorrenteService {
  constructor(
    @InjectRepository(ContaCorrenteRepository)
    private contaCorrenteRepository: ContaCorrenteRepository,
  ) {}
  
  async createContaCorrente(createContaCorrenteDto: CreateContaCorrenteDto): Promise<ContaCorrente> {
      return this.contaCorrenteRepository.createContaCorrente(createContaCorrenteDto);
  }

  async findConta(conta: string): Promise<ContaCorrente> {
    const contaCorrente = await this.contaCorrenteRepository.findOne({ where:
      { conta: conta} });
    if (!contaCorrente) throw new NotFoundException('Conta Corrente não encontrada');

    return contaCorrente;
  }

  async saldoContaCorrente(contaCorrenteDto: ContaCorrenteDto,conta: string): Promise<Object> {
    const contaCorrente = await this.contaCorrenteRepository.findOne({ where:
      { conta: conta} });
    if (!contaCorrente) throw new NotFoundException('Conta Corrente não encontrada');

    return {
      conta: conta,
      saldo: contaCorrente.saldo,
      message: 'Saldo Conta Corrente'
    }
  }

  /**
   * Verifica se o usuário possui saldo suficiente
   * @param valor 
   * @param saldo 
   * @returns boolean
   */
   async saldoSuficiente (valor: number, saldo: number): Promise<boolean>{
    if(valor > saldo){
      throw new InternalServerErrorException(
        'Usuário não possui saldo suficiente',
      );
    }
    return true;
  }
  async sacarContaCorrente(contaCorrenteDto: ContaCorrenteDto, conta: string): Promise<Object> {
    const contaCorrente = await this.findConta(conta);
    const { valor } = contaCorrenteDto;
    let saldoBd = Number(contaCorrente.saldo);

    if(this.saldoSuficiente(valor,saldoBd)){
      let valorF = Number(valor);
      contaCorrente.saldo = saldoBd ? saldoBd - valorF : valorF;
      try {
        await contaCorrente.save();
        return {
          conta: conta,
          saldo: contaCorrente.saldo,
          message: 'Saque Efetuado com Sucesso'
        }
      } catch (error) {
        console.log(error);

        throw new InternalServerErrorException(
          'Erro ao salvar os dados no banco de dados',
        );
      }
        
    }    
  }

  async depositarContaCorrente(contaCorrenteDto: ContaCorrenteDto, conta: string): Promise<Object> {
    const contaCorrente = await this.findConta(conta);
    const { valor } = contaCorrenteDto;
    let saldoBd = Number(contaCorrente.saldo);
    let valorF = Number(valor);
    contaCorrente.saldo = saldoBd ? saldoBd + valorF : valorF;
    console.log(contaCorrente.saldo);
    try {
      await contaCorrente.save();
      return {
        conta: conta,
        saldo: contaCorrente.saldo,
        message: 'Depósito Efetuado com Sucesso'
      }
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }
}