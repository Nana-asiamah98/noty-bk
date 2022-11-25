import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './application/application.module';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { TemplateModule } from './template/template.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      load : [configuration],
      isGlobal: true
    }),
    KeycloakConnectModule.registerAsync({
      useClass: AuthService,
    }),
    ApplicationModule,
    UserModule,
    TemplateModule,
    DatabaseModule,
    // AuthModule,
    
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
