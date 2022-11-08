import { CategoriaModule } from 'src/categoria/categoria.module';
import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';

// Nesse caso onde quero usar o serviço de categoria, bastou importar o modulo de categoria. Fazer o mesmo para outros modulos
// Lembrar de exportar o serviço que desejar utilizar em outro modulo como no exemplo da: src\categoria\categoria.module.ts
@Module({
  imports: [CategoriaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
