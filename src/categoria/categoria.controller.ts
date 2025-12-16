import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';

@Controller('/categorias')
export class CategoriaController {

  constructor(
    private readonly categoriaService: CategoriaService,
  ) {}

  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string): Promise<Categoria[]> {
    return this.categoriaService.findByNome(nome);
  }

  @Get('/:id')
  findById(@Param('id') id: number): Promise<Categoria | null> {
    return this.categoriaService.findById(id);
  }

  @Post()
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.save(categoria);
  }

  @Put()
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<void> {
    return this.categoriaService.delete(id);
  }
}
