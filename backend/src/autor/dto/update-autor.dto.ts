import { PartialType } from '@nestjs/mapped-types';
import { CreateAutorDto } from './create-autor.dto';
import { IsOptional, IsString } from 'class-validator';



// export class UpdateAutorDto{

//     @IsString({
//         message: 'El campo nombre debe ser un string',
//     })
//     @IsOptional()
//     nombre:string;

//     @IsString()
//     @IsOptional()
//     apellidos:string;
// }

export class UpdateAutorDto extends PartialType(CreateAutorDto) {}
