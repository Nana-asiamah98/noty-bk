import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory } from 'nest-keycloak-connect';

@Injectable()
export class AuthService implements KeycloakConnectOptionsFactory {
    constructor(private configService? : ConfigService){}
    createKeycloakConnectOptions(): KeycloakConnectOptions | Promise<KeycloakConnectOptions> {
        const keycloakConfig = this.configService.get("keycloak");
        return keycloakConfig;
    }
   
}
