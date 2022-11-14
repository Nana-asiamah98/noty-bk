import { TransportType } from '@nestjs-modules/mailer/dist/interfaces/mailer-options.interface';
import * as config from 'config';

const mailerConfig = config.get('mailer');

export const mailerExport: TransportType = {
  service: mailerConfig.service,
  host: mailerConfig.host,
  port: mailerConfig.port,
  secure: mailerConfig.secure,
  auth: {
    user: mailerConfig.auth.user,
    pass: mailerConfig.auth.password,
  },
};
