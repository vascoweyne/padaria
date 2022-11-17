import { Injectable } from '@nestjs/common';
import { homedir } from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    return 'PADARIA EM CONSTRUÇÃO';
  }
}
