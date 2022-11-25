import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { AuthService } from './auth.service';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useClass: AuthService,
    }),
  ],
})
export class AuthModule {}
