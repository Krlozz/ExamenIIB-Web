import { Injectable } from '@nestjs/common';
import { LibroEntity } from './libro.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Injectable()
export class LibroService {

  constructor(
    @InjectRepository(LibroEntity)
    private readonly _libroRepository: Repository<LibroEntity>,
  ){}

  async findAll(): Promise<LibroEntity[]>{
    return await this._libroRepository.find();
  }

  async findSkip(sk: number, tk: number): Promise<LibroEntity[]> {
    return await this._libroRepository.find({
      order: {
        nombre: 'DESC',
      },
      skip: sk,
      take: tk,
    });
  }

  async findLike(lk: string): Promise<LibroEntity[]>{
    return await this._libroRepository.find({
      nombre: Like(`%${lk}%`),
    });
  }

}
