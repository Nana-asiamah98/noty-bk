import { KeycloakConnectConfig } from 'nest-keycloak-connect';
import * as config from 'config';

const keycloakConfig = config.get('keycloak');
export const keyConfig: KeycloakConnectConfig = {
  authServerUrl: keycloakConfig.authServerUrl,
  realm: keycloakConfig.realm,
  clientId: keycloakConfig.clientId,
  secret: keycloakConfig.secret,
  logLevels: ['error'],
  useNestLogger: keycloakConfig.useNestLogger,
};
