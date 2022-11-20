import { Injectable } from '@nestjs/common';
import { homedir } from 'os';

@Injectable()
export class AppService {
 
  getHello(): string {
    return 'Bem vindo a Padaria';
  }
}
