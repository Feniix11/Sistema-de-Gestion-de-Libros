import { IsNotEmpty, IsString } from "class-validator";

export class CreateAutorDto {

        @IsString({
            message: 'El campo nombre debe ser un string',
        })
        @IsNotEmpty()
        nombre:string;

        @IsString()
        @IsNotEmpty()
        apellidos:string;

}
