import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './application/application.module';
import { typeormConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { TemplateModule } from './template/template.module';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { keyConfig } from './config/keycloak.config';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    KeycloakConnectModule.register(keyConfig),
    ApplicationModule,
    UserModule,
    TemplateModule,
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
  {
    provide: APP_GUARD,
    useClass: ResourceGuard,
  },
  {
    provide: APP_GUARD,
    useClass: RoleGuard,
  }],
})
export class AppModule {}
