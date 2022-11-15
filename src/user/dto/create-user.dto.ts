import { Status } from "src/utils/app-constants.utils";

export class CreateUserDto {
  userName: string;
  email : string;
  firstName: string;
  lastName: string;
  status: Status;
}
