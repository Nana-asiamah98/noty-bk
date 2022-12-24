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

  /* [START] SETTING UP SWAGGER */
  /* Setting Up Swagger Document Builder */
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
    .setDescription(
      'This is a backend service for creating a email template and submitting emails.',
    )
    .setVersion('1.0')
    .build();

  /* Create A Swagger Document */
  const document = SwaggerModule.createDocument(app, config);

  /* Setting Up The Swagger Module In Nest JS */
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Noty Endpoints',
    swaggerOptions: {
      persistAuthorization: true,
      oauth2RedirectUrl: 'http://localhost:3000/api/oauth2-redirect.html',
      initOAuth: {
        clientId: keycloakConfig.cliendId,
        clientSecret: keycloakConfig.secret,
        realm: keycloakConfig.realm,
      },
    },
  });
  /* [CLOSE] SETTING UP SWAGGER */

  await app.listen(3000);
}
bootstrap();
