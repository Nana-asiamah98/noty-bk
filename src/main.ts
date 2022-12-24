import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* CONFIG SERVICE */
  const configService = app.get<ConfigService>(ConfigService);
  const keycloakConfig = configService.get('keycloak');

  /* SETTING UP SWAGGER */
  const config = new DocumentBuilder()
    .addOAuth2({
      type: 'oauth2',
      flows: {
        authorizationCode: {
          authorizationUrl: `${keycloakConfig.authServerUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/auth`,
          tokenUrl: `${keycloakConfig.authServerUrl}realms/${keycloakConfig.realm}/protocol/openid-connect/token`,
          scopes: {
            openid: 'openid',
            profile: 'profile',
          },
        },
      },
    })
    .setTitle('Noty Endpoints')
    .setDescription('The Cats API Description')
    .setVersion('1.0')
    .addTag('noty')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      oauth2RedirectUrl: 'http://localhost:3000/api/oauth2-redirect.html',
      initOAuth: {
        clientId: keycloakConfig.cliendId,
        clientSecret: keycloakConfig.secret,
        realm: keycloakConfig.realm,
      },
    },
  });
  /* SETTING UP SWAGGER */

  await app.listen(3000);
}
bootstrap();
