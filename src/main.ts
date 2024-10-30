import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import { LoggingInterceptor } from 'src/logging/logging.interceptor';
import { LoggingService } from 'src/logging/logging.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: 'Content-Type, Authorization, X-Pays, X-IP, X-ISP, X-Browser, X-OS, X-USER',
    credentials: true,
  });
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  const loggingService = app.get(LoggingService);
  app.useGlobalInterceptors(new LoggingInterceptor(loggingService));
  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

  const port = 4001;
  await app.listen(port);
}
bootstrap(); 
