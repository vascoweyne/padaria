import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { response } from 'express';
import { ApiAcceptedResponse } from '@nestjs/swagger';
import { appendFile } from 'fs';
import * as express from 'express';
import { ServeStaticModule } from '@nestjs/serve-static';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  };

  app.enableCors(options);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
  //console.log(`Padaria App Rodando:${await app.getUrl()}`);
}
bootstrap();

