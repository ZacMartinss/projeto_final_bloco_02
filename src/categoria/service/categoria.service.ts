import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Categoria } from '../entity/categoria.entity';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      relations: {
        produto: true,
      },
    });
  }

  async findById(id: number): Promise<Categoria | null> {
    return await this.categoriaRepository.findOne({
      where: { id },
      relations: {
        produto: true,
      },
    });
  }

  async findByNome(nome: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        produto: true,
      },
    });
  }

  async save(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categoria): Promise<Categoria> {
    await this.categoriaRepository.save(categoria);
    return await this.findById(categoria.id) as Categoria;
  }

  async delete(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}
