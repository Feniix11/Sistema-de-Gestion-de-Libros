import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos
      host: process.env.HOST_FELIX, // Dirección del host
      port: Number(process.env.PORT_DB), // Puerto de MySQL (por defecto es 3306)
      username: process.env.USERNAME, // Usuario de la base de datos
      password: process.env.PASSWORD, // Contraseña de la base de datos
      database: process.env.DB, // Nombre de la base de datos
      autoLoadEntities: true, // Aquí incluyes las entidades
      synchronize: true, // Sincroniza automáticamente las entidades con la base de datos (desactívalo en producción)
    }),
    LibrosModule,
    AutorModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
