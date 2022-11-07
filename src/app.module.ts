import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaService } from './categoria/categoria.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoService } from './produto/produto.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [CategoriaModule, ProdutoModule, PrismaModule, UserModule  ],
  controllers: [AppController],
  providers: [AppService, CategoriaService, ProdutoService, PrismaService],
  
})
export class AppModule {}
export class CatsModule {}
