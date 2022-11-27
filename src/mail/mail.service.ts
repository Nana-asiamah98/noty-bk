import { Injectable, Logger } from '@nestjs/common';
import { MailerService as NodeMailer } from '@nestjs-modules/mailer';
import { TemplateRepository } from 'src/template/template.repository';
import { MailDto } from './dto/mail.dto';
import { templateTransformer } from 'src/utils/template.transformer';
import Handlebars, { Exception, template } from 'handlebars';
import { response } from 'express';
import templateSample from 'src/assets/email1.template';
import { TemplateService } from 'src/template/template.service';

@Injectable()
export class MailService {
  private logger = new Logger(MailService.name);
  constructor(
    private templateService: TemplateService,
    private mailService: NodeMailer,
  ) {}

  async sendMail(templateId: string, mailInfo: MailDto): Promise<string> {
    try {
      const { templateDescription, name } = await this.templateService.findByTemplateId(
        templateId,
      );
      /* const transformedTemplate: string = await templateTransformer(
      templateDescription
    ); */
    this.logger.verbose(`Templte Name ${name} Has Been Generated`);
      const handlerBarsTemplate = Handlebars.compile(templateDescription);
      const mainTemplate = handlerBarsTemplate({
        name: 'Kojo Asiamah',
      });
      const { to, from, subject, text } = mailInfo;
      this.logger.verbose(`[ABOUT TO SEND MAIL TO ${to}]`);
      const sentMail = await this.mailService.sendMail({
        to,
        from,
        subject,
        text,
        html: mainTemplate,
      });
      const newName: string[] = [];
      newName.length;
      const { accepted, rejected, response } = sentMail;
      if (accepted.length < 1 || rejected.length >= 1) {
        this.logger.error('Failed To Send Email');
        throw new Exception('Failed To Send Email');
      }
      return 'success';
    } catch (error) {
      this.logger.error(error);
    }
  }
}
