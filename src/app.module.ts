import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './application/application.module';
import { typeormConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { TemplateModule } from './template/template.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig),ApplicationModule, UserModule, TemplateModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
