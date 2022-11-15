import { Injectable, Logger } from '@nestjs/common';
import { Exception } from 'handlebars/runtime';
import { find } from 'rxjs';
import { Status } from 'src/utils/app-constants.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);
  constructor(private userRepo: UserRepository) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const { userName, email, firstName, lastName } = createUserDto;
    const user = this.userRepo.create({
      userName,
      firstName,
      email,
      lastName,
    });
    

    return this.userRepo.save(user);
  }

  findAll(): Promise<User[] | null> {
    return this.userRepo.find();
  }

  findOne(id: string): Promise<User> {
    this.logger.verbose(id)
    const user = this.userRepo.findOneBy({ id: id });
    if (!user) {
      throw new Exception('Failed To Fetch User');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.findOne(id);
    if (user) {
      const { userName, firstName, lastName, email } = updateUserDto;
      user.userName = userName;
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.id = id;
      return this.userRepo.save(user);
    }

    return new User;
  }

  async toggleAccount(id: string) : Promise<String> {
    const user = await this.findOne(id);
    if(user){
      user.isActive = !user.isActive;
      return `User ${user.userName} account has been deactivated`;

    }
    return `User ${user.id} account couldn't be deactivated`;
  }
}
