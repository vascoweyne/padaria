import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CategoriaDto } from './dto/create-categoria.dto';
import { v4 as uuid, v4 } from 'uuid';

const categorias = [];

@Injectable()
export class CategoriaService {
  capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  create(createCategoria: CategoriaDto) {
    try {
      const { nome, produtos } = createCategoria;
      const categoria = {
        id: uuid(),
        nome: this.capitalizeFirstLetter(nome),
        produtos: produtos,
      };
      const categoriaExiste = categorias.some(
        (categoria) => categoria.nome === nome,
      );

      if (categoriaExiste) {
        throw new HttpException(
          'Já existe uma categoria com este nome',
          HttpStatus.CONFLICT,
        );
      }

      categorias.push(categoria);
      return `Categoria "${categoria.nome}" criada com sucesso`;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return categorias;
  }

  findOne(id: string) {
    const categoria = categorias.find((element) => element.id === id);
    return categoria;
  }

  update(id: string, updateCategoriaDto) {
    const categoria = categorias.find((element) => element.id === id);

    const updateCategoria = Object.assign(categoria, updateCategoriaDto);
    return updateCategoria;
  }

  remove(id: string) {
    const categoria = categorias.find((element) => element.id === id);
    const categoriaIndex = categorias.indexOf(categoria);
    categorias.splice(categoriaIndex, 1);
    return `Categoria ${categoria.nome} deletada com sucesso`;
  }
}
