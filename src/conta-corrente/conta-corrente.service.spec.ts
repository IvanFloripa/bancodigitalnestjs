import { Test, TestingModule } from '@nestjs/testing';
import { ContaCorrenteRepository } from './../conta-corrente/conta-corrente.repository';
import { ContaCorrenteService } from './conta-corrente.service';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';
import { NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';

const mockContaCorrenteRepository = () => ({
  sacarContaCorrente: jest.fn(),
  findConta: jest.fn(),
});

describe('ContaCorrenteService', () => {
  let contaCorrenteRepository;
  let service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContaCorrenteService,
        {
          provide: ContaCorrenteRepository,
          useFactory: mockContaCorrenteRepository,
        },
      ],
    }).compile();

    contaCorrenteRepository = await module.get<ContaCorrenteRepository>(ContaCorrenteRepository);
    service = await module.get<ContaCorrenteService>(ContaCorrenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(contaCorrenteRepository).toBeDefined();
  });
  
  describe('findConta', () => {
    let mockCreateConta: CreateContaCorrenteDto;

    beforeEach(() => {
      mockCreateConta = {
        conta: 46789,
        valor:1000,
        saldo:1000
      };
    });
    it('should return the found conta corrente', async () => {
      contaCorrenteRepository.findConta.mockResolvedValue('mockConta');
      expect(contaCorrenteRepository.findConta).not.toHaveBeenCalled();


    });

    it('should throw an error as conta corrent is not found', async () => {
      contaCorrenteRepository.findConta.mockResolvedValue(null);
      expect(contaCorrenteRepository.findConta('mockConta')).rejects.toThrow(NotFoundException);
    });
  });
  
});