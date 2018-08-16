import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {LibroEntity} from "./libro.entity";
import {Like, Repository} from "typeorm";
import {AutorEntity} from "../Autor/autor.entity";

@Injectable()
export class LibroService {

    listaLibros = [
        {
            'id': 1,
            'isbn': 1223,
            'nombre': '100 años de Soledad',
            'numeroPaginas': 231,
            'edicion': 1,
            'fechaPublicacion': '1990/11/20',
            'nombreEditorial': 'Sol',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 1
        },
        {
            'id': 2,
            'isbn': 2342,
            'nombre': 'Crimen y castigo',
            'numeroPaginas': 123,
            'edicion': 1,
            'fechaPublicacion': '1989/08/02',
            'nombreEditorial': 'Parada',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 1
        },
        {
            'id': 3,
            'isbn': 9966,
            'nombre': 'El Alquimista',
            'numeroPaginas': 543,
            'edicion': 1,
            'fechaPublicacion': '1980/02/27',
            'nombreEditorial': 'Pro',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 2
        },
        {
            'id': 4,
            'isbn': 8890,
            'nombre': 'Lo que el viento se llevó',
            'numeroPaginas': 6566,
            'edicion': 1,
            'fechaPublicacion': '1970/11/18',
            'nombreEditorial': 'Cas',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 2
        },
        {
            'id': 5,
            'isbn': 8893,
            'nombre': 'Citas del Presidente Mao Tse-Tung',
            'numeroPaginas': 546,
            'edicion': 1,
            'fechaPublicacion': '1965/08/18',
            'nombreEditorial': 'Hora',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 3
        },
        {
            'id': 6,
            'isbn': 9797342,
            'nombre': 'Piense y hágase rico',
            'numeroPaginas': 256,
            'edicion': 1,
            'fechaPublicacion': '1978/07/29',
            'nombreEditorial': 'Carat',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 3
        },
        {
            'id': 7,
            'isbn': 9983,
            'nombre': 'El diario de Ana Frank',
            'numeroPaginas': 348,
            'edicion': 1,
            'fechaPublicacion': '1923/02/22',
            'nombreEditorial': 'Cora',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 4
        },
        {
            'id': 8,
            'isbn': 7553,
            'nombre': 'El Código da Vinci',
            'numeroPaginas': 321,
            'edicion': 1,
            'fechaPublicacion': '1978/10/09',
            'nombreEditorial': 'Jepo',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 4
        },
        {
            'id': 9,
            'isbn': 2309,
            'nombre': 'la Biblia',
            'numeroPaginas': 543,
            'edicion': 1,
            'fechaPublicacion': '1900/10/11',
            'nombreEditorial': 'Koarl',
            'imagenUrl': 'http://www.mclanfranconi.com/wp-content/uploads/Icono-Libro-2.png',
            'autorId': 5
        }
    ];

    constructor(@InjectRepository(LibroEntity)
                private readonly libroRepository: Repository<LibroEntity>) {
    }

    crearLibros() {
        for (var libros in this.listaLibros) {
            const libro = new LibroEntity();
            libro.id = this.listaLibros[libros].id;
            libro.isbn = this.listaLibros[libros].isbn;
            libro.nombre = this.listaLibros[libros].nombre;
            libro.numeroPaginas = this.listaLibros[libros].numeroPaginas;
            libro.edicion = this.listaLibros[libros].edicion;
            libro.fechaPublicacion = this.listaLibros[libros].fechaPublicacion;
            libro.nombreEditorial = this.listaLibros[libros].nombreEditorial;
            libro.imagenUrl = this.listaLibros[libros].imagenUrl;
            const autor = new AutorEntity();
            autor.id = this.listaLibros[libros].autorId;
            libro.autorId = autor;
            this.libroRepository.save(libro);
        }
        return this.libroRepository.find();
    }

    async traerTodos(): Promise<LibroEntity[]> {
        return await this.libroRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.libroRepository.find({nombre: Like("%" + parametroBusqueda + "%")});
    }

    async traerLibrosPorAutor(autorID): Promise<LibroEntity[]> {
        return await this.libroRepository.find({where: {autorId: autorID}});
    }

    async traerLibroPorId(idLibro): Promise<LibroEntity[]> {
        return await this.libroRepository.find({where: {id: idLibro}});
    }

}