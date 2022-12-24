import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOAuth2, ApiTags } from '@nestjs/swagger/dist';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { TemplateService } from './template.service';

@Controller(`/api/v1/template`)
@ApiOAuth2(['profile:write'])
@ApiTags('Templates')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post()
  create(@Body() createTemplateDto: CreateTemplateDto) {
    return this.templateService.create(createTemplateDto);
  }

  @Get()
  findAll() {
    return this.templateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTemplateDto: UpdateTemplateDto,
  ) {
    return this.templateService.update(id, updateTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templateService.activeToggle(id);
  }
}
