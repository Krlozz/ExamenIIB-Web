import { Controller, Get, Param, Query } from '@nestjs/common';
import { AutorService } from './autor.service';

@Controller('autor')
export class AutorController {


  constructor(private readonly _autorService: AutorService){}
  @Get()
  obtenerTodos(@Query() query){
    const skip = query.skip;
    const take = query.take;
    if (isNaN(skip) && isNaN(take))
      return this._autorService.findAll();
    else
      return this._autorService.findSkip(skip, take);
  }

  @Get('search/:like')
  obtenerLike(@Param('like') like){
    return this._autorService.findLike(like);
  }
}
