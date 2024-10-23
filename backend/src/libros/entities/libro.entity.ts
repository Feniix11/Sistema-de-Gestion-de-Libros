import { Autor } from 'src/autor/entities/autor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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


  @ManyToOne(()=>Autor , autor=>autor.id)
  autor:Autor;
}
