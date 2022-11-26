import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory
} from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const config = this.configService.get('db');
    config.entities = [__dirname + '/../**/*.entity.{ts,js}'];
    config.migrations = [__dirname + '/../**/migrations/*.{ts,js}'];
    return config;
  }
}
