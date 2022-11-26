import { Module } from '@nestjs/common';
import { TemplateModule } from 'src/template/template.module';
import { TemplateRepository } from 'src/template/template.repository';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  imports: [TemplateModule],
  providers: [MailService],
  controllers: [MailController]
})
export class MailModule {}
