import { forwardRef, Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { CategoriaModule } from 'src/categoria/categoria.module';

@Module({
  imports: [CategoriaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [ProdutoService],
  
})
export class ProdutoModule {}

