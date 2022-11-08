import { CategoriaService } from 'src/categoria/categoria.service';
import { Inject, Injectable } from '@nestjs/common';
import { ProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  @Inject(CategoriaService) private readonly categoriaService: CategoriaService;
  create() {
    // Exemplo utilizando o service de categorias no arquivo de produto
    const tenis = this.categoriaService.capitalizeFirstLetter('tenis');
    console.log(tenis);
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
