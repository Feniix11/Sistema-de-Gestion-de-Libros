import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateAutorDto } from '../dto/create-autor.dto';
import { AutorService } from '../service/autor.service';
import { UpdateAutorDto } from '../dto/update-autor.dto';


@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  create(@Body() createAutorDto: CreateAutorDto) {
    return this.autorService.create(createAutorDto);
  }

  @Get()
  findAll() {
    return this.autorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.autorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutorDto: UpdateAutorDto) {
    return this.autorService.update(+id, updateAutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(+id);
  }
}
