import { Test, TestingModule } from '@nestjs/testing';
import { ContaCorrenteRepository } from './../conta-corrente/conta-corrente.repository';
import { ContaCorrenteService } from './conta-corrente.service';
import { ContaCorrenteDto } from './dtos/conta-corrente.dto';
import { NotFoundException, UnprocessableEntityException } from '@nestjs/common';

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