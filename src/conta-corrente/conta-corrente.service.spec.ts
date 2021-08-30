import { Test, TestingModule } from '@nestjs/testing';
import { ContaCorrenteRepository } from './../conta-corrente/conta-corrente.repository';
import { ContaCorrenteService } from './conta-corrente.service';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';
import { NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateContaCorrenteDto } from './dtos/create-conta-corrente.dto';

const mockContaCorrenteRepository = () => ({
  createContaCorrente: jest.fn(),
  findOne: jest.fn(),
  delete: jest.fn(),
  findConta: jest.fn(),
});

describe('ContaCorrenteService', () => {
  let contaCorrenteRepository;
  let service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContaCorrenteDto,
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

  describe('createContaCorrente', () => {
    let mockCreateConta: CreateContaCorrenteDto;

    beforeEach(() => {
      mockCreateConta = {
        conta: 456789,
        valor:1000,
        saldo:1000
      };
    });

    it('should create accounte', async () => {
      contaCorrenteRepository.createUser.mockResolvedValue('mockConta');
      const result = await service.createAdminUser(mockCreateConta);

      expect(contaCorrenteRepository.createContaCorrente).toHaveBeenCalledWith(
        mockCreateConta,
      );
      expect(result).toEqual('mockUser');
    });
  });

  describe('sacarContaCorrente', () => {
    it('should return the found user', async () => {
      contaCorrenteRepository.findOne.mockResolvedValue('mockConta');
      expect(contaCorrenteRepository.findOne).not.toHaveBeenCalled();

      const result = await service.findUserById('mockId');
      expect(contaCorrenteRepository.findOne).toHaveBeenCalledWith('mockId', { select });
      expect(result).toEqual('mockContaCorrente');
    });

    it('should throw an error as user is not found', async () => {
      contaCorrenteRepository.findOne.mockResolvedValue(null);
      expect(service.findUserById('mockId')).rejects.toThrow(NotFoundException);
    });
  });
});