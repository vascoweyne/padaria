import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaService } from './categoria/categoria.service';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoService } from './produto/produto.service';

@Module({
  imports: [CategoriaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService, CategoriaService, ProdutoService],
})
export class AppModule {}
