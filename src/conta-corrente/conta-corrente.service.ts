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
    // if (createUserDto.password != createContaCorrenteDto.passwordConfirmation) {
    //   throw new UnprocessableEntityException('As senhas não conferem');
    // } else {
      return this.contaCorrenteRepository.createContaCorrente(createContaCorrenteDto);
    // }
  }

  // async findAll(): Promise<ContaCorrente[]> {
  //   const contaCorrente = this.contaCorrenteRepository.find();
  //   return contaCorrente;
  // }

  async findConta(conta: string): Promise<ContaCorrente> {
    const contaCorrente = await this.contaCorrenteRepository.findOne({ where:
      { conta: conta} });
    if (!contaCorrente) throw new NotFoundException('Conta Corrente não encontrada');

    return contaCorrente;
  }

  async sacarContaCorrente(contaCorrenteDto: ContaCorrenteDto, conta: string): Promise<ContaCorrente> {
    const contaCorrente = await this.findConta(conta);
    const { valor, saldo } = contaCorrenteDto;
    contaCorrente.saldo = saldo ? saldo : contaCorrente.saldo;
    console.log(contaCorrente);
    try {
      await contaCorrente.save();
      return contaCorrente;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }

  async depositarContaCorrente(contaCorrenteDto: ContaCorrenteDto, conta: string): Promise<ContaCorrente> {
    const contaCorrente = await this.findConta(conta);
    const { valor, saldo } = contaCorrenteDto;
    let saldoBd = Number(contaCorrente.saldo);
    let valorF = Number(valor);
    contaCorrente.saldo = saldoBd ? saldoBd + valorF : valorF;
    console.log(contaCorrente.saldo);
    try {
      await contaCorrente.save();
      return contaCorrente;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }
}