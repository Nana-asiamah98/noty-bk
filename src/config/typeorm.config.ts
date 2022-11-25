import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import configuration from './configuration';
import dbConfiguration from './configuration';

const dbConfig: any = dbConfiguration;
export const { db } = dbConfig;

export default new DataSource({
  ...dbConfiguration["db"],
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../**/migrations/*.{ts,js}'],
});
