import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDto } from 'src/template/dto/create-template.dto';
import { Template } from 'src/template/entities/template.entity';
import { CreateApplicationDto } from './create-application.dto';

export class FetchApplicationDTO extends PartialType(CreateApplicationDto) {
  id: string;
  isActive: boolean;
  template: Template[];
}
