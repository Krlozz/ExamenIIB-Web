import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AutorController } from './autor/autor.controller';
import { AutorModule } from './autor/autor.module';
import { LibroController } from './libro/libro.controller';
import { LibroService } from './libro/libro.service';
import { LibroModule } from './libro/libro.module';
import { CorsMiddleware } from './cors/cors.middleware';
import { UsuarioController } from './usuario/usuario.controller';
import {LibroEntity} from "./libro/libro.entity";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {AutorEntity} from "./autor/autor.entity";
import {AutorizacionController} from "./autorizacion.controller";
import {AutorService} from "./autor/autor.service";
import {UsuarioService} from "./usuario/usuario.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'carlos',
      password: '1234',
      database: 'bddBack',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
      TypeOrmModule.forFeature([
          UsuarioEntity,
          AutorEntity,
          LibroEntity])

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