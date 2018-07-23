import { Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {AutorEntity} from "./autor.entity";
import {Like, Repository} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";


@Injectable()
export class AutorService {

    listaAutores = [
        {'id': 1, 'nombre': 'Pedro', 'apellido': 'Perez', 'fechaNacimiento': '1987/01/10', 'numeroLibros': 123, 'ecuatoriano': true, 'imagenUrl': 'http://icons-for-free.com/icon/download-dark_male_writer_icon-419734.png', 'usuario': 1},
        {'id': 2, 'nombre': 'Juan', 'apellido': 'Dominguez', 'fechaNacimiento': '1977/08/03', 'numeroLibros': 34, 'ecuatoriano': false, 'imagenUrl': 'http://icons-for-free.com/icon/download-dark_male_writer_icon-419734.png', 'usuario': 1},
        {'id': 3, 'nombre': 'Martha', 'apellido': 'Hernández', 'fechaNacimiento': '1966/06/10', 'numeroLibros': 45, 'ecuatoriano': false, 'imagenUrl': 'http://icons-for-free.com/icon/download-dark_male_writer_icon-419734.png', 'usuario': 2},
        {'id': 4, 'nombre': 'Diego', 'apellido': 'Cevallos', 'fechaNacimiento': '1695/05/08', 'numeroLibros': 42, 'ecuatoriano': true, 'imagenUrl': 'http://icons-for-free.com/icon/download-dark_male_writer_icon-419734.png', 'usuario': 3},
        {'id': 5, 'nombre': 'Elizabeth', 'apellido': 'Vetancour', 'fechaNacimiento': '1978/08/25', 'numeroLibros': 87, 'ecuatoriano': true, 'imagenUrl': 'http://icons-for-free.com/icon/download-dark_male_writer_icon-419734.png', 'usuario': 4},
    ];

    constructor(@InjectRepository(AutorEntity)
                private readonly autorRepository: Repository<AutorEntity>){
    }

    crearAutores() {
        for(var autores in this.listaAutores) {
            const autor = new AutorEntity();
            autor.id = this.listaAutores[autores].id;
            autor.nombre = this.listaAutores[autores].nombre;
            autor.apellido = this.listaAutores[autores].apellido;
            autor.fechaNacimiento = this.listaAutores[autores].fechaNacimiento;
            autor.numeroLibros =this.listaAutores[autores].numeroLibros;
            autor.ecuatoriano = this.listaAutores[autores].ecuatoriano;
            autor.imagenUrl =  this.listaAutores[autores].imagenUrl;
            const usuario = new UsuarioEntity();
            usuario.id = this.listaAutores[autores].usuario;
            autor.usuario = usuario;
            this.autorRepository.save(autor);
        }
        return this.autorRepository.find();
    }

    async traerTodos(): Promise<AutorEntity[]> {
        return await this.autorRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.autorRepository.find({ nombre: Like("%" + parametroBusqueda + "%") });
    }

    async traerAutorPorUsuario(usuario): Promise<AutorEntity[]> {
        return await this.autorRepository.find({where: {usuario: usuario}});
    }

}