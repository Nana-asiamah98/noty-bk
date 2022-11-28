import { Injectable, Logger } from '@nestjs/common';
import { MailerService as NodeMailer } from '@nestjs-modules/mailer';
import { TemplateRepository } from 'src/template/template.repository';
import { MailDto } from './dto/mail.dto';
import {
  getMessageId,
  templateTransformer,
} from 'src/utils/template.transformer';
import Handlebars, { Exception, template } from 'handlebars';
import { response } from 'express';
import templateSample from 'src/assets/email1.template';
import { TemplateService } from 'src/template/template.service';
import { Mail } from './entities/mail.entity';
import { MailRepository } from './mail.repository';
import { MailStatus } from './enum/mail-status.enum';

@Injectable()
export class MailService {
  private logger = new Logger(MailService.name);
  constructor(
    private templateService: TemplateService,
    private mailService: NodeMailer,
    private mailRepository: MailRepository,
  ) {}

  async sendMail(templateId: string, mailInfo: MailDto): Promise<string> {
    try {
      const { templateDescription, name } =
        await this.templateService.findByTemplateId(templateId);
      /* const transformedTemplate: string = await templateTransformer(
      templateDescription
    ); */
      this.logger.verbose(`Templte Name ${name} Has Been Generated`);
      const handlerBarsTemplate = Handlebars.compile(templateDescription);
      const mainTemplate = handlerBarsTemplate({
        name: 'Adwamanhene!! 😜',
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
      const { accepted, rejected, response, messageId } = sentMail;
      if (accepted.length < 1 || rejected.length >= 1) {
        this.saveMail(mailInfo, name, messageId, MailStatus.FAILED);
        this.logger.error('Failed To Send Email');
        throw new Exception('Failed To Send Email');
      }
      this.saveMail(mailInfo, name, messageId, MailStatus.SUCCESS);
      return 'success';
    } catch (error) {
      this.logger.error(error);
    }
  }

  private async saveMail(
    mailInfo: MailDto,
    templateTitle: string,
    message_id: string,
    status: string,
  ): Promise<void> {
    const { to, from, subject, text } = mailInfo;
    const messageId: string = await getMessageId(message_id);
    const receiver = from;
    const mailResult = this.mailRepository.create({
      messageId,
      templateTitle,
      status,
      to,
      receiver
    });
    const result = this.mailRepository.save(mailResult);
    this.logger.verbose("[MAIL SAVED]");
    console.log({result});
  }
}
