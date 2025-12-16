import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categoria } from '../categoria/entity/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column({ length: 255, nullable: false })
  descricao: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column({ nullable: false })
  estoque: number;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;
}
