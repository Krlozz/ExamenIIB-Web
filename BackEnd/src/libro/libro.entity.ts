import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';

@Entity('LIBRO')
export class LibroEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  isbn: number;

  @Column()
  nombre: string;

  @Column()
  numeroPaginas: number;

  @Column()
  edicion: number;

  @Column()
  fechaPublicacion: string;

  @Column()
  nombreEditorial: string;

  @Column()
  imagenUrl: string;


  @ManyToOne( type => AutorEntity, autorEntity => autorEntity.libros)
  autor: AutorEntity;
}