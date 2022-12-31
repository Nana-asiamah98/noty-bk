import { Status } from 'src/utils/app-constants.utils';

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Username For The User Should Be Unique',
  })
  @IsString()
  @IsNotEmpty()
  userName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'Select either ACTIVE or INACTIVE',
    examples: [Status.ACTIVE, Status.IN_ACTIVE],
  })
  @IsIn([Status.ACTIVE, Status.IN_ACTIVE])
  status: Status;
}
