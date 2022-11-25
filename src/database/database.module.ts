import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './database.config';

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        useClass: DatabaseConfig,
      }),
    ],
  })
  export class DatabaseModule {}