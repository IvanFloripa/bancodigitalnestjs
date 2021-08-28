import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaCorrenteRepository } from './conta-corrente.repository';
import { ContaCorrenteService } from './conta-corrente.service';
import { ContaCorrenteController } from './conta-corrente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContaCorrenteRepository])],
  providers: [ContaCorrenteService],
  controllers: [ContaCorrenteController],
})
export class ContaCorrenteModule {}