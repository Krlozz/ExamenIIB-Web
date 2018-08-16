import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Like, Repository} from "typeorm";

@Injectable()
export class UsuarioService {

    listaUsuarios = [
        {'id': 1, 'nombre': 'carlos.ayala@hotmail.com', 'contrasena': '12345', 'urlImg': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 2, 'nombre': 'alexis.miranda@hotmail.com', 'contrasena': '12345', 'urlImg': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 3, 'nombre': 'gabriel.macias@hotmail.com', 'contrasena': '12345', 'urlImg': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 4, 'nombre': 'paul.cisneros@hotmail.com', 'contrasena': '12345', 'urlImg': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 5, 'nombre': 'kate.cajilema@hotmail.com', 'contrasena': '12345', 'urlImg': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 6, 'nombre': 'christian.chicaiza@hotmail.com', 'contrasena': '12345', 'urlImg': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
    ];

    constructor(@InjectRepository(UsuarioEntity)
                private readonly usuarioRepository: Repository<UsuarioEntity>){
    }

    crearUsuario() {
        for(var usuarios in this.listaUsuarios) {
            const usuario = new UsuarioEntity();
            usuario.id = this.listaUsuarios[usuarios].id;
            usuario.nombre = this.listaUsuarios[usuarios].nombre;
            usuario.contrasena = this.listaUsuarios[usuarios].contrasena;
            usuario.urlImg = this.listaUsuarios[usuarios].urlImg;
            this.usuarioRepository.save(usuario);
        }
        return this.usuarioRepository.find();
    }

    async traerTodos(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find();
    }

    async obtenerUsuarioPorNombre(nombreArgumento) {
        return await this.usuarioRepository.
        createQueryBuilder("usuario").where("usuario.nombre = :nombre", { nombre: nombreArgumento }).getOne();
    }

    async buscar(parametroBusqueda) {

        return await this.usuarioRepository.find({ nombre: Like("%" + parametroBusqueda + "%") });
    }

    async obtenerUsuarioPorId(idUsuario) {
        return await this.usuarioRepository.find({where: {id: idUsuario}})
    }
}