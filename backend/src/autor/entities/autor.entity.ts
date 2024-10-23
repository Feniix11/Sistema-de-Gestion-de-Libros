import { Libro } from "src/libros/entities/libro.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;

    @DeleteDateColumn()
    DeleteAt:Date


    @OneToMany(()=>Libro , libro=>libro.Isbn)
    libro:Libro[]
}
