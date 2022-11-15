import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import { ApplicationRepository } from './application.repository';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ApplicationController],
  providers: [ApplicationService,ApplicationRepository]
})
export class ApplicationModule {}
