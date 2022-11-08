import { CategoriaService } from 'src/categoria/categoria.service';
import { ProdutoService } from './produto/produto.service';
import { ProdutoModule } from 'src/produto/produto.module';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';


@Module({
  imports: [CategoriaModule, ProdutoModule, UserModule],
  controllers: [AppController],
  providers: [AppService, CategoriaService, ProdutoService, UserService],
  
})
export class AppModule {}
export class CatsModule {}
