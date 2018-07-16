import { Controller, Get, Param, Query } from '@nestjs/common';
import { LibroService } from './libro.service';

@Controller('libro')
export class LibroController {


  constructor(private readonly _libroService: LibroService){}

  @Get()
  obtenerTodos(@Query() query){
    const skip = query.skip;
    const take = query.take;
    if (isNaN(skip) && isNaN(take))
      return this._libroService.findAll();
    else
      return this._libroService.findSkip(skip, take);
  }

  @Get('search/:like')
  obtenerLike(@Param('like') like){
    return this._libroService.findLike(like);
  }
}
