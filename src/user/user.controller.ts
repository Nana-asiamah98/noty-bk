import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as config from 'config';
import { ApiBody, ApiOAuth2, ApiTags } from '@nestjs/swagger/dist';
import { ValidationPipe } from '@nestjs/common/pipes';
import { UsePipes } from '@nestjs/common/decorators';
import { UserStatusValidationPipe } from './pipes/user-status-validation-pipes';

const versionConfig = 'v1';
@ApiOAuth2(['profile:write'])
@Controller(`/api/${versionConfig}/user`)
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiBody({
    type: CreateUserDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.toggleAccount(id);
  }
}
