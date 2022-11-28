import { Module } from '@nestjs/common';
import { TemplateModule } from 'src/template/template.module';
import { TemplateRepository } from 'src/template/template.repository';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailRepository } from './mail.repository';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TemplateModule, AuthModule, UserModule],
  providers: [MailService,MailRepository],
  controllers: [MailController]
})
export class MailModule {}
