import { CategoriaService } from 'src/categoria/categoria.service';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CategoriaDto } from 'src/categoria/dto/create-categoria.dto';
import { v4 as uuid, v4 } from 'uuid';

const produtos = [];

@Injectable()
export class ProdutoService {
  capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }    
  @Inject(CategoriaService) private readonly categoriaService: CategoriaService;
  create(createProduto: ProdutoDto) {

    try {
      const { nome, prod } = createProduto;
      
      const produto = {
       CategoriaDto: CategoriaDto,
        id: uuid(),
        nome: this.capitalizeFirstLetter(nome),
        produto: prod,
      };
      const produtoExiste =produtos.some(
        (produto) => produto.nome === nome,
      );

      if (produtoExiste) {
        throw new HttpException(
          'Já existe um produto com este nome',
          HttpStatus.CONFLICT,
        );
      }

      produtos.push(produto);
      return `produto "${produto.nome}" criado com sucesso`;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  
  }

  findAll() {
    return  produtos;
  }

  findOne(id: string) {
    const produto = produtos.find((element) => element.id === id);
    return produto;
  }

  update(id: string, updateProdutoDto: UpdateProdutoDto) {
    const produto = produtos.find((element) => element.id === id);

    const updateProduto = Object.assign(produto, updateProdutoDto);
    return updateProduto;
  }

  remove(id: String) {
    const produto = produtos.find((element) => element.id === id);
    const categoriaIndex = produtos.indexOf(produto);
    produtos.splice(categoriaIndex, 1);
    return `Produto ${produto.nome} deletado com sucesso`;
  }
}
