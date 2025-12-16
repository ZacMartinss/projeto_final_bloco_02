import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  findById(id: number): Promise<Categoria | null> {
    return this.categoriaRepository.findOne({
      where: { id },
    });
  }

  save(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categoria): Promise<Categoria> {
    await this.categoriaRepository.save(categoria);
    return this.findById(categoria.id) as Promise<Categoria>;
  }

  async delete(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }

  findByNome(nome: string): Promise<Categoria[]> {
    return this.categoriaRepository.find({
        where: {
            nome,
        },
    });
  }
}
