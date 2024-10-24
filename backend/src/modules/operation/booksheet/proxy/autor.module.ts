import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorController } from '../controller/autor.controller';
import { AutorService } from '../service/autor.service';
import { Autor } from '../entities/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}
