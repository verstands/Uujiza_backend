import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();  // Charger les variables d'environnement

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration CORS
  app.enableCors({
    origin: process.env.CORS_ORIGINS?.split(',') || ['http://127.0.0.1:5173', 'http://localhost:46505'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: 'Content-Type, Authorization, X-Pays, X-IP, X-ISP, X-Browser, X-OS, X-USER',
    credentials: true,
  });

  // Utilisation du répertoire 'uploads'
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  
  // Préfixe global pour toutes les routes API
  app.setGlobalPrefix('api');
  
  // Validation globale des pipes
  app.useGlobalPipes(new ValidationPipe());

  // Configuration du port avec une variable d'environnement, sinon 4001 par défaut
  const port = process.env.PORT || 4001;
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

