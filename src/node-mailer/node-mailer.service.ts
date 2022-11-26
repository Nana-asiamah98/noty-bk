import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NodeMailerService implements MailerOptionsFactory {
  constructor(private configService: ConfigService) {}
  createMailerOptions(): MailerOptions | Promise<MailerOptions> {
    const config: MailerType = this.configService.get('mailer');
    return config;
  }
}


