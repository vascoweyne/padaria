import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaDto } from './dto/create-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  create(@Body() createCategoriaDto: CategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto) {
    return this.categoriaService.update(id, updateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(id);
  }
}
