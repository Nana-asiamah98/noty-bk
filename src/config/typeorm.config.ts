import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: '192.168.251.101',
    port: 5432,
    username: 'nana',
    password: '4rfv%TGB',
    database: 'noty',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    migrations: [__dirname + '/../**/migrations/*.{ts,js}'],
  });
  
