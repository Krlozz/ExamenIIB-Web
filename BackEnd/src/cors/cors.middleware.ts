import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  resolve(context: string): MiddlewareFunction {
    return (req, res, next) => {
      console.log('Alguien intenta entrar');
      res.header('Access-Control-Allow-Origin', '*');
      next();
    };
  }
  constructor(){}
}
