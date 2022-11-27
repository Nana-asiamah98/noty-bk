import { Body, Controller, Post } from '@nestjs/common';
import { MailDto } from './dto/mail.dto';
import { MailService } from './mail.service';

@Controller('/api/v1/mail')
export class MailController {
  constructor(private mailService: MailService) {}
  @Post('/send-mail-test')
  async sendMailTest(@Body() mailDto: MailDto): Promise<string> | null {
    return await this.mailService.sendMail(mailDto.templateId, mailDto);
  }
}
