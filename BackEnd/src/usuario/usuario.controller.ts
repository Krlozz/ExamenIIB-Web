import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

  constructor(private readonly _usuarioService: UsuarioService){}

  @Get()
  obtenerTodos(@Query() query){
    const skip = query.skip;
    const take = query.take;
    if (isNaN(skip) && isNaN(take))
      return this._usuarioService.findAll();
    else
      return this._usuarioService.findSkip(skip, take);
  }

  @Get(':id')
  obtenerUno(@Param('id') id){
    return this._usuarioService.findOneId(id);
  }

  @Post('login')
  login(@Body() body){
    const username = body.usuario;
    const password = body.password;
    return this._usuarioService.findOne(username, password);
  }

  @Get('search/:like')
  obtenerLike(@Param('like') like){
    return this._usuarioService.findLike(like);
  }


}
