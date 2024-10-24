import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { AutorService } from '../service/autor.service';
import { CreateAutorDto } from '../dto/create-autor.dto';
import { UpdateAutorDto } from '../dto/update-autor.dto';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  create(@Body() createAutorDto: CreateAutorDto) {
    if (!createAutorDto.nombre || !createAutorDto.apellidos) {
      throw new NotFoundException('No se proporciono la informacion correcta');
    }
    return this.autorService.create(createAutorDto);
  }

  @Get()
  findAll() {
    return this.autorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.autorService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAutorDto: UpdateAutorDto,
  ) {
    if (!updateAutorDto || Object.keys(updateAutorDto).length == 0) {
      throw new NotFoundException('No se proporciono informacion correcta');
    }

    // const autor = await this.autorService.findOne(id);
    // if (!autor) {
    //   throw new NotFoundException(`autor con id ${id} no encontrado`);
    // }

    const respuesta = await this.autorService.update(id, updateAutorDto);

    const valor =
      respuesta.affected > 0
        ? 'Autor Actualizado Correctamente'
        : 'Ocurrio un error en la Actualizacion';
    return {
      valor,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const respuesta = await this.autorService.remove(id);

    return {
      valor:
        respuesta.affected > 0
          ? 'Autor Eliminado Correctamente'
          : 'Ocurrio un error durante la eliminacion',
    };
  }
}
