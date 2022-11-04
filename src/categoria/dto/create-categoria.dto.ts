import { v4 as uuid, v4 } from 'uuid';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoriaDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  produtos: [string];
}
