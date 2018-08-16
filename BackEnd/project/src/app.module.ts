import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AutorController} from "./Autor/autor.controller";
import {LibroController} from "./Libro/libro.controller";
import {AutorService} from "./Autor/autor.service";
import {AutorizacionController} from "./autorizacion.controller";
import {LibroService} from "./Libro/libro.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {AutorEntity} from "./Autor/autor.entity";
import {LibroEntity} from "./Libro/libro.entity";
import {UsuarioController} from "./Usuario/usuario.controller";
import {UsuarioService} from "./Usuario/usuario.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3307,
          username: 'carlos',
          password: '1234',
          database: 'testBack',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          //ssl: true,
      }),
      TypeOrmModule.forFeature([AutorEntity,LibroEntity,UsuarioEntity])
  ],
  controllers: [
      AppController,
      AutorController,
      LibroController,
      AutorizacionController,
      UsuarioController],
  providers: [
      AppService,
      AutorService,
      LibroService,
      UsuarioService
     ],
})

export class AppModule {}
