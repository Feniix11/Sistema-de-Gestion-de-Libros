import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from '../dto/create-libro.dto';
import { UpdateLibroDto } from '../dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from '../entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibrosService {


  constructor(@InjectRepository(Libro) private readonly  libroRepository: Repository<Libro>) { }


  create(createLibroDto: CreateLibroDto) {
    const libro = this.libroRepository.create(createLibroDto);
    return this.libroRepository.save(libro);
  
  }

  findAll() {
    return this.libroRepository.find(
    {
      relations: ['autor']
    }
    );
  }

  findOne(id: string) {
   return  this.libroRepository.findOne(
    {
      where: {Isbn:id},
    }
   );
  }

  update(id: string, updateLibroDto: UpdateLibroDto) {
    return this.libroRepository.update(id,updateLibroDto);
  }


  
}
