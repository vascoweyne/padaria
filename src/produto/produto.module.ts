import { CategoriaModule, CommonModule } from 'src/categoria/categoria.module';
import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';


@Module({
  imports: [CategoriaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
