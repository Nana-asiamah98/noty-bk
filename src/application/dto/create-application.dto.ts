import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateApplicationDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  userId: string;
}
