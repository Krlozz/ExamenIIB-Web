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
      options: { encrypt: true },
    }),
    UsuarioModule,
    AutorModule,
    LibroModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(CorsMiddleware)
      .with('AppModule')
      .forRoutes(UsuarioController, LibroController, AutorController);
  }
  constructor(private readonly _connection: Connection){}
}
