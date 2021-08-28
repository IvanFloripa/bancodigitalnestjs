import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { ContaCorrenteModule } from './conta-corrente/conta-corrente.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, ContaCorrenteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
