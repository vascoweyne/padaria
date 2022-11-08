import { CategoriaService } from 'src/categoria/categoria.service';
import { ProdutoService } from './produto/produto.service';
import { ProdutoModule } from 'src/produto/produto.module';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [CategoriaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService, CategoriaService, ProdutoService,],
  
})
export class AppModule {}
export class CatsModule {}
