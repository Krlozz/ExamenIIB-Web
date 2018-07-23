import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {AutorService} from "./autor.service";
import {AutorEntity} from "./autor.entity";

@Controller('Autor')
export class AutorController {

    constructor(private _autorService: AutorService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const equipos = await this._autorService.traerTodos();
        return response.send(equipos);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._autorService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('/porUsuario/:idUsuario')
    async obtenerAutorPorUsuario(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._autorService.traerAutorPorUsuario(paramParams.idUsuario);
        return response.send(usuarios);
    }

    @Post()
    async crearAutorBase() {
        const autores = this._autorService.crearAutores();
        return autores;
    }


}