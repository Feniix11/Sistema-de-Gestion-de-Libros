import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException, Put } from '@nestjs/common';

import { CreateLibroDto } from '../dto/create-libro.dto';
import { UpdateLibroDto } from '../dto/update-libro.dto';
import { LibrosService } from '../service/libros.service';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
 async  create(@Body() createLibroDto: CreateLibroDto) {

    if (!createLibroDto || Object.keys(createLibroDto).length == 0) {
      throw new NotFoundException('No se proporciono informacion correcta');
    }

    const respuesta=await  this.librosService.create( createLibroDto);

    return{
         mensaje:respuesta?'Libro guardado Correctamente':'Ocurrio un Error al  guardar el Libro'
    }


  }

  @Get()
  findAll() {
    return this.librosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.librosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLibroDto: UpdateLibroDto) {

    if (!updateLibroDto || Object.keys(updateLibroDto).length == 0) {
      throw new NotFoundException('No se proporciono informacion correcta');
    }



    const respuesta=await  this.librosService.update(id, updateLibroDto);

    return{
         mensaje:respuesta.affected>0?'Libro Actualizado Correctamente':'Ocurrio un Error al  Actualizar el Libro'
    }
  }

 
}
