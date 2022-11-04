import { Inject, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CategoriaService } from 'src/categoria/categoria.service';

@Injectable()
export class ProdutoService {
  // constructor(readonly categoriaService: CategoriaService) {}
  //@Inject(CategoriaService)
  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
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
