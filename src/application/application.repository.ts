import { Injectable } from '@nestjs/common';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Application } from './entities/application.entity';

@EntityRepository(Application)
export class ApplicationRepository extends Repository<Application> {
  constructor(private datasource: DataSource) {
    super(Application, datasource.createEntityManager());
  }
}
