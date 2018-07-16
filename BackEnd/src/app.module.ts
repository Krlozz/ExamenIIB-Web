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
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'barcelona',
      database: 'examenweb2bim',
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
