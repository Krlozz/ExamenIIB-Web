import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {LibroEntity} from "../Libro/libro.entity";

@Entity('autor')
export class AutorEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    apellido: string;

    @Column({ length: 500 })
    fechaNacimiento: string;

    @Column()
    numeroLibros: number;

    @Column()
    ecuatoriano: boolean;

    @Column({ length: 2000 })
    imagenUrl: string;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.autores)
    usuarioId: UsuarioEntity;


    @OneToMany(
        type => LibroEntity,
        libro => libro.autorId)
    libros: AutorEntity [];
}