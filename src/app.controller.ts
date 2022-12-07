import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('index.html')
  get(@Res() res: Response){
    res.sendFile(__dirname, './index.html'),
    res.sendFile(__dirname, './Login.html'),
    res.sendFile(__dirname, './menu.html'),
    res.sendFile(__dirname, './crud.html'),
    res.sendFile(__dirname, './crudProdutos.html')
  }

  }
