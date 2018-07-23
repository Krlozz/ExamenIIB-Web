import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Like, Repository} from "typeorm";

@Injectable()
export class UsuarioService {

    listaUsuarios = [
        {'id': 1, 'usuario': 'carlos.ayala@hotmail.com', 'password': '12345', 'imagenUrl': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 2, 'usuario': 'alexis.miranda@hotmail.com', 'password': '12345', 'imagenUrl': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 3, 'usuario': 'gabriel.macias@hotmail.com', 'password': '12345', 'imagenUrl': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 4, 'usuario': 'paul.cisneros@hotmail.com', 'password': '12345', 'imagenUrl': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 5, 'usuario': 'kate.cajilema@hotmail.com', 'password': '12345', 'imagenUrl': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
        {'id': 6, 'usuario': 'christian.chicaiza@hotmail.com', 'password': '12345', 'imagenUrl': 'http://www.iaipanama.org/images/img-demo/usuario-registrados.png'},
    ];

    constructor(@InjectRepository(UsuarioEntity)
                private readonly usuarioRepository: Repository<UsuarioEntity>){
    }

    crearUsuario() {
        for(var usuarios in this.listaUsuarios) {
            const usuario = new UsuarioEntity();
            usuario.id = this.listaUsuarios[usuarios].id;
            usuario.usuario = this.listaUsuarios[usuarios].usuario;
            usuario.password = this.listaUsuarios[usuarios].password;
            usuario.imagenUrl = this.listaUsuarios[usuarios].imagenUrl;
            this.usuarioRepository.save(usuario);
        }
        return this.usuarioRepository.find();
    }

    async traerTodos(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find();
    }

    async obtenerUsuarioPorNombre(nombreArgumento) {
        return await this.usuarioRepository.
        createQueryBuilder("usuario").where("usuario.nombre = :nombre", { usuario: nombreArgumento }).getOne();
    }

    async buscar(parametroBusqueda) {

        return await this.usuarioRepository.find({ usuario: Like("%" + parametroBusqueda + "%") });
    }

    async obtenerUsuarioPorId(idUsuario) {
        return await this.usuarioRepository.find({where: {id: idUsuario}})
    }
}