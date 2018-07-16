import { Injectable } from '@nestjs/common';
import { AutorEntity } from './autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { LibroEntity } from '../libro/libro.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Injectable()
export class AutorService {

  constructor(
    @InjectRepository(AutorEntity)
    private readonly _autorRepository: Repository<AutorEntity>,
  ){}

  async findAll(): Promise<AutorEntity[]>{
    return await this._autorRepository.find();
  }


  async findSkip(sk: number, tk: number): Promise<AutorEntity[]>{
    return await this._autorRepository.find({
      order: {
        nombre: 'DESC',
      },
      skip: sk,
      take: tk,
    });
  }
  async findLike(lk: string): Promise<AutorEntity[]>{
    return await this._autorRepository.find({
      nombre: Like(`%${lk}%`),
    });
  }

}
