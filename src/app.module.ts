import { CategoriaService } from 'src/categoria/categoria.service';
import { ProdutoService } from './produto/produto.service';
import { ProdutoModule } from 'src/produto/produto.module';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Sempre importar os modulos de outros serviços aqui na array de imports
@Module({
  imports: [CategoriaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService, ProdutoService, CategoriaService],
})
export class AppModule {}
export class CatsModule {}
