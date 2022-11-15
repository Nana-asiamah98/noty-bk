import { DataSource, Entity, EntityRepository, Repository } from "typeorm";
import { Template } from "./entities/template.entity";

@EntityRepository(Template)
export class TemplateRepository extends Repository<Template>{
    constructor(private dataSource : DataSource){
        super(Template, dataSource.createEntityManager());
    }
}