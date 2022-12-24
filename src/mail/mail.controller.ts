import { Body, Controller, Post } from '@nestjs/common';
import { ApiOAuth2, ApiTags } from '@nestjs/swagger/dist';
import { GetUser } from 'src/auth/decorator/auth.decorator';
import { AuthDTO } from 'src/auth/dto/auth.dto';
import { MailDto } from './dto/mail.dto';
import { MailService } from './mail.service';

@Controller('/api/v1/mail')
@ApiOAuth2(['profile:write'])
@ApiTags('Mail')
export class MailController {
  constructor(private mailService: MailService) {}
  @Post('/send-mail-test')
  async sendMailTest(
    @Body() mailDto: MailDto,
    @GetUser() authDto: AuthDTO,
  ): Promise<string> | null {
    return await this.mailService.sendMail(
      mailDto.templateId,
      mailDto,
      authDto,
    );
  }
}
