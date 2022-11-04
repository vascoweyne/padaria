import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { v4 as uuid, v4 } from 'uuid';

let categorias = [];

@Injectable()
export class CategoriaService {
  create(createCategoria: CategoriaDto) {
try{
    const {nome}  = createCategoria;
    const categoria = {
      id:uuid(),
      nome: nome
    }
    const categoriaExiste = categorias.some((categoria)=>categoria.nome === categoria.nome)
    if(categoriaExiste) {
        throw new HttpException("Já existe uma categoria com este nome", HttpStatus.CONFLICT)
    }

  
    categorias.push(categoria)
    return `Categoria "${categoria.nome}" criada com sucesso`;
  } catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST)
   }
  }

  findAll() {
    return categorias;
    
  }

  findOne(id: string) {
    //console.log(categorias.indexOf());
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
