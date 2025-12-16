import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../entity/produto.entity';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Produto | null> {
    return await this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true,
      },
    });
  }

  async save(produto: Produto): Promise<Produto> {
    return await this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    await this.produtoRepository.save(produto);
    return this.findById(produto.id) as Promise<Produto>;
  }

  async delete(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}