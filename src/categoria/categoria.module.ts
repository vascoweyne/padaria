import { forwardRef, Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { ProdutoModule } from 'src/produto/produto.module';
import { CatsModule } from 'src/app.module';

@Module({
  imports: [ProdutoModule, forwardRef(() => CatsModule)],
  controllers: [CategoriaController],
  providers: [CategoriaService],
  exports: [CategoriaService ],
})
export class CategoriaModule {}
export class CommonModule {}
