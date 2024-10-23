import { Module } from '@nestjs/common';
import { AutorController } from './controller/autor.controller';
import { AutorService } from './service/autor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Autor])],
  controllers: [AutorController],
  providers: [AutorService],

})
export class AutorModule {}
