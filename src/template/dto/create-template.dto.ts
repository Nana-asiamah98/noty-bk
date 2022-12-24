import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateTemplateDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  templateDescription: TemplateSample;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  applicationId: string;
}
