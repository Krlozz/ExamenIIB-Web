import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';

@Entity('USUARIO')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario: string;

  @Column()
  password: string;

  @Column()
  imagenUrl: string;

  @OneToMany(type => AutorEntity, autorEntity => autorEntity.usuario)
  autores: AutorEntity[];

}