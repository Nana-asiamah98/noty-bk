import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { Status } from 'src/utils/app-constants.utils';
import { CreateUserDto } from '../dto/create-user.dto';
export class UserStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [Status.ACTIVE, Status.IN_ACTIVE];

  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log({ value });

    if (!this.isStatusValid(value.status)) {
      throw new BadRequestException(
        `"${value.status}" is an invalid status!!!`,
      );
    }
    return value;
    // throw new Error('Method not implemented.');
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
