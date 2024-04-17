import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { configureAuthSwaggerDocs } from './application/common/helpers/configure-auth-swagger-docs.helper';
import { configureSwaggerDocs } from './application/common/helpers/configure-swagger-docs.helper';
import { EnvService } from './application/common/env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(EnvService)
  const port = configService.get('PORT')
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  configureAuthSwaggerDocs(app, configService);
  configureSwaggerDocs(app, configService);
  await app.listen(port, '0.0.0.0');
  if (configService.get("NODE_ENV") === 'dev') {
    Logger.debug(
      `${await app.getUrl()} - Environment: ${configService.get(
        'NODE_ENV',
      )}`,
      'Environment',
    );

    Logger.debug(`${await app.getUrl()}/docs`, 'Swagger');
  }
}
bootstrap();