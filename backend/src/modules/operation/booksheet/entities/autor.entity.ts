import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Libro } from './libro.entity';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @DeleteDateColumn()
  DeleteAt: Date;

  @OneToMany(() => Libro, (libro) => libro.Isbn)
  libro: Libro[];
}
