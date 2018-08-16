import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AutorEntity} from "../Autor/autor.entity";

@Entity('libro')
export class LibroEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true})
    isbn: number;

    @Column({ length: 500 })
    nombre: string;

    @Column()
    numeroPaginas: number;

    @Column()
    edicion: number;

    @Column({ length: 50})
    fechaPublicacion: string;

    @Column({ length: 500 })
    nombreEditorial: string;

    @Column({ length: 2000 })
    imagenUrl: string;

    @ManyToOne(
        type => AutorEntity,
        autor => autor.libros)
    autorId: AutorEntity;
}