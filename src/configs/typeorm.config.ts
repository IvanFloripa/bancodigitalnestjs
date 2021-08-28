import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: '1234',
  database: 'banco-api',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};