import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { EnvService } from '../env/env.service';

const SWAGGER_ENVS = ['local', 'dev', 'staging'];

export function configureSwaggerDocs(
  app: INestApplication,
  configService: EnvService,
) {
  if (
    SWAGGER_ENVS.includes(configService.get('NODE_ENV'))
  ) {
    const config = new DocumentBuilder()
      .setTitle('API')
      .setDescription('API document for Fiverr')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, documentFactory);
  }
}