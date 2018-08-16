import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {LibroService} from "./libro.service";
import {LibroEntity} from "./libro.entity";

@Controller('Libro')
export class LibroController {

    constructor(private _libroService: LibroService) {
    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const libros = await this._libroService.traerTodos();
        return response.send(libros);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._libroService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('porAutor/:idAutor')
    async obtenerLibrosPorAutor(
        @Param() paramParams,
        @Res() response
    ) {
        const libros = await this._libroService.traerLibrosPorAutor(paramParams.idAutor);
        return response.send(libros);
    }

    @Get('por/id/:idLibro')
    async obtenerLibroPorId(
        @Param() paramParams,
        @Res() response
    ) {
        const libro = await this._libroService.traerLibroPorId(paramParams.idLibro);
        return response.send(libro);
    }

    @Post()
    async crearLibroBase() {
        const libros = this._libroService.crearLibros();
        return libros;
    }

}