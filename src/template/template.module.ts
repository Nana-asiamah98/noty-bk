import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { TemplateRepository } from './template.repository';
import { UserModule } from 'src/user/user.module';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  imports: [UserModule, ApplicationModule],
  controllers: [TemplateController],
  providers: [TemplateService, TemplateRepository],
  exports : [TemplateRepository,TemplateService]
})
export class TemplateModule {}
