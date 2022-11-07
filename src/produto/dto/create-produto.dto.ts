import { v4 as uuid, v4 } from 'uuid';
import { IsNotEmpty, IsString } from 'class-validator';
import { CategoriaDto } from 'src/categoria/dto/create-categoria.dto';

export class ProdutoDto extends CategoriaDto  {
   
    CategoriaDto: CategoriaDto;
    
    categoria: [string];
}


