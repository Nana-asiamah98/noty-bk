import { Injectable, Logger } from '@nestjs/common';
import { Exception } from 'handlebars';
import { ApplicationService } from '../application/application.service';
import { Application } from '../application/entities/application.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { Template } from './entities/template.entity';
import { TemplateRepository } from './template.repository';

@Injectable()
export class TemplateService {
  private logger = new Logger(TemplateService.name);
  constructor(
    private templateRepository: TemplateRepository,
    private readonly userService: UserService,
    private readonly applicationService: ApplicationService,
  ) {}
  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const { name, templateDescription, userId, applicationId } =
      createTemplateDto;

    const user = await this.userService.findOne(userId);
    const application = await this.applicationService.findOne(applicationId);

    const template = new Template();
    template.name = name;
    template.applicaiton = application;
    template.templateDescription = templateDescription;
    template.user = user;
    const createdTemplate: Template = await template.save();
    this.logger.verbose('Template Has Been Created Successfully');
    return createdTemplate;
  }

  async findAll(): Promise<Template[] | null> {
    const templates: Template[] = await this.templateRepository.find({
      order: {
        name: 'DESC',
      },
      relations: {
        user: true,
        applicaiton: true,
      },
    });
    return templates;
  }

  async findOne(id: string): Promise<Template> {
    const template: Template = await this.templateRepository.findOneBy({
      id: id,
    });
    if (!template) {
      throw new Exception(`There is no template with the ID ${id}`);
    }
    return template;
  }

  async update(id: string, updateTemplateDto: UpdateTemplateDto) {
    const { name, templateDescription, userId, applicationId, isActive } =
      updateTemplateDto;

    const isTemplate: Template | boolean = (await this.findOne(id)) ?? false;

    if (isTemplate) {
      const application: Application = await this.applicationService.findOne(
        applicationId,
      );
      isTemplate.name = name;
      isTemplate.applicaiton = application;
      isTemplate.isActive = isActive;
      isTemplate.templateDescription = templateDescription;
      const updatedTemplate: Template = await this.templateRepository.save(
        isTemplate,
      );
      this.logger.verbose('Template Has Been Created Successfully');
      return updatedTemplate;
    }

    return new Template();
  }

  async activeToggle(id: string): Promise<Template | boolean> {
    const template: Template | boolean = (await this.findOne(id)) ?? false;

    if (template) {
      template.isActive = !template.isActive;
      this.templateRepository.save(template);
      return template.isActive;
    }

    return template;
  }
}
