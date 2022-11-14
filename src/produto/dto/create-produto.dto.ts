import { v4 as uuid, v4 } from 'uuid';
import { IsNotEmpty, IsString } from 'class-validator';
import { CategoriaDto } from 'src/categoria/dto/create-categoria.dto';

export class ProdutoDto extends CategoriaDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  nome: string;
  
  CategoriaDto: CategoriaDto;

}
