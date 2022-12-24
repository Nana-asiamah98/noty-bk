import { ApiProperty } from '@nestjs/swagger/dist';

export class MailDto {
  @ApiProperty()
  templateId: string;
  @ApiProperty()
  subject?: string;
  @ApiProperty()
  text?: string;
  @ApiProperty()
  to?: string;
  @ApiProperty()
  from?: string;
}
