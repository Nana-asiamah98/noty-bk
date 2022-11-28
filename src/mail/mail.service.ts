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
import { AuthDTO } from 'src/auth/dto/auth.dto';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class MailService {
  private logger = new Logger(MailService.name);
  constructor(
    private templateService: TemplateService,
    private mailService: NodeMailer,
    private mailRepository: MailRepository,
    private authService: AuthService,
    private userSertive: UserService,
  ) {}

  async sendMail(
    templateId: string,
    mailInfo: MailDto,
    authDto: AuthDTO,
  ): Promise<string> {
    try {
      const createdBy = await this.fetchUser(authDto);
      const { templateDescription, name } =
        await this.templateService.findByTemplateId(templateId);
      this.logger.verbose(`Templte Name ${name} Has Been Generated`);
      const handlerBarsTemplate = Handlebars.compile(templateDescription);
      const mainTemplate = handlerBarsTemplate({
        name: 'Adwamanhene!! 😜',
      });
      const { to, from, text } = mailInfo;
      const subject = name;
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
        this.saveMail(mailInfo, name, messageId, MailStatus.FAILED, createdBy);
        this.logger.error('Failed To Send Email');
        throw new Exception('Failed To Send Email');
      }
      this.saveMail(mailInfo, name, messageId, MailStatus.SUCCESS, createdBy);
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
    createdBy,
  ): Promise<void> {
    const { to, from, subject, text } = mailInfo;
    const messageId: string = await getMessageId(message_id);
    const receiver = from;
    const mailResult = this.mailRepository.create({
      messageId,
      templateTitle,
      status,
      to,
      receiver,
      createdBy
    });
    this.mailRepository.save(mailResult);
    this.logger.verbose('[MAIL SAVED]');
  }

  private async fetchUser(authDto: AuthDTO): Promise<User> {
    const keycloakUser = await this.authService.getUserByUserName(authDto);
    const user = this.userSertive.findOne(keycloakUser.id) ?? false;
    if (!user) throw new Exception('User Does Not Exist');
    return user;
  }
}
