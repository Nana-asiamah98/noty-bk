import { KeycloakConnectConfig } from 'nest-keycloak-connect';

export type KeyCloakModuleConfigType = {
  authServerUrl?: string;
  realm?: string;
  clientId?: string;
  secret?: string;
  logLevels?: [];
  useNestLogger?: boolean;
};

export interface KeyCloakModuleConfigInterface {
  createKeyCloakModule(KeyCloakModuleConfigInterface? : any): KeycloakConnectConfig | Promise<KeycloakConnectConfig>;
}
