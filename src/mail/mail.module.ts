import { Module } from '@nestjs/common';
import { TemplateModule } from 'src/template/template.module';
import { TemplateRepository } from 'src/template/template.repository';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailRepository } from './mail.repository';

@Module({
  imports: [TemplateModule],
  providers: [MailService,MailRepository],
  controllers: [MailController]
})
export class MailModule {}
