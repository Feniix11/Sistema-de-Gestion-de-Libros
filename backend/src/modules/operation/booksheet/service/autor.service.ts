import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from '../dto/create-autor.dto';
import { UpdateAutorDto } from '../dto/update-autor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from '../entities/autor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private readonly autorRepository: Repository<Autor>,
  ) {}

  create(createAutorDto: CreateAutorDto) {
    const autor = this.autorRepository.create(createAutorDto);
    return this.autorRepository.save(autor);
  }

  findAll() {
    return this.autorRepository.find();
  }

  findOne(id: number) {
    return this.autorRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return this.autorRepository.update(id, updateAutorDto);
  }

  remove(id: number) {
    return this.autorRepository.softDelete(id);
  }
}
