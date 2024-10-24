import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Autor } from './autor.entity';

@Entity({ name: 'Libro' })
export class Libro {
  @PrimaryGeneratedColumn()
  Isbn: string;

  @Column()
  titulo: string;

  @Column()
  anioPublicacion: number;

  @Column({ default: true })
  Disponible: boolean;

  @Column()
  genero: string;

  @ManyToOne(() => Autor, (autor) => autor.id)
  autor: Autor;
}
