import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ stopAtFirstError: true, forbidUnknownValues: false }),
  );

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('class-validator-2byte')
    .setDescription('API description')
    .setVersion('1.0')
    .addServer('http://localhost:3000', 'local environment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
