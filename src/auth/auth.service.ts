import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import KeycloakConnect from 'keycloak-connect';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
} from 'nest-keycloak-connect';
import { AuthDTO } from './dto/auth.dto';
import {
  KeyCloakModuleConfigType,
  KeycloakUserDto,
} from './interface/KeyCloakIntf';

@Injectable()
export class AuthService implements KeycloakConnectOptionsFactory {
  constructor(private configService?: ConfigService) {}
  createKeycloakConnectOptions():
    | KeycloakConnectOptions
    | Promise<KeycloakConnectOptions> {
    const keycloakConfig = this.configService.get('keycloak');
    return keycloakConfig;
  }

  async getUserByUserName(authDto: AuthDTO) {
    const keycloakConfig: KeyCloakModuleConfigType =
      this.configService.get('keycloak');
    const user = await axios({
      url: keycloakConfig.authServerUrl
        .concat(`/admin/realms/${keycloakConfig.realm}`)
        .concat(`/users?username=${authDto.preferred_username}&exact=true`),
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authDto.accessTokenJWT}`,
      },
    });
    const keyCloakUser: KeycloakUserDto = user.data[0];
    if (keyCloakUser !== null) return keyCloakUser;
  }
}
