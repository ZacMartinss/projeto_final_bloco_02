import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';

@Controller('/produtos')
export class ProdutoController {

  constructor(
    private readonly produtoService: ProdutoService,
  ) {}

  @Get()
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number): Promise<Produto | null> {
    return this.produtoService.findById(id);
  }

  @Post()
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.save(produto);
  }

  @Put()
  update(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.update(produto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<void> {
    return this.produtoService.delete(id);
  }
}
