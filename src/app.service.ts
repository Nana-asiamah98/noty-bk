import { Injectable, Logger } from '@nestjs/common';
import { keyConfig } from './config/keycloak.config';
import { mailerExport } from './config/mailer.config';

@Injectable()
export class AppService {
  private logger: Logger = new Logger(AppService.name);
  getHello(): string {  
    this.logger.verbose(keyConfig.clientId);
    return 'Hello World!';
  }
}
