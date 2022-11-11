import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const usuarios = [];
@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
      const { name, email, password } = createUserDto;
      const usuario = {
        user: usuarios,
        password: 123456,
      };
      return `Usuario  criado com sucesso`
    //return `Usuario "${usuario.user}" criado com sucesso`
}
}
