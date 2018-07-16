import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { LibroEntity } from '../libro/libro.entity';

@Entity('AUTOR')
export class AutorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  fechaNacimiento: string;

  @Column()
  numeroLibros: number;

  @Column()
  ecuatoriano: boolean;

  @Column()
  imagenUrl: string;

  @ManyToOne( type => UsuarioEntity, usuarioEntity => usuarioEntity.autores)
  usuario: UsuarioEntity;

  @OneToMany( type => LibroEntity, libroEntity => libroEntity.autor)
  libros: LibroEntity[];

}