import { Module } from '@nestjs/common';

import { LibrosController } from '../controller/libros.controller';
import { LibrosService } from '../service/libros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from '../entities/libro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  controllers: [LibrosController],
  providers: [LibrosService],
})
export class LibrosModule {}
