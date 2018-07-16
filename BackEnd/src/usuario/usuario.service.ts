import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>,
  ){}

  async findAll(): Promise<UsuarioEntity[]>{
    return await this._usuarioRepository.find();
  }

  async findOneId(id: string): Promise<UsuarioEntity>{
    return await  this._usuarioRepository.findOne(id);
  }
  async findSkip(sk: number, tk: number): Promise<UsuarioEntity[]>{
    return await this._usuarioRepository.find({
      order: {
        usuario: 'DESC',
      },
      skip: sk,
      take: tk,
    });
  }

  async findOne(user: string, pass: string): Promise<UsuarioEntity>{
    return await this._usuarioRepository.findOneOrFail({ usuario: user, password: pass});
  }

  async findLike(lk: string): Promise<UsuarioEntity[]>{
    return await this._usuarioRepository.find({
      usuario: Like(`%${lk}%`),
    });
  }
}
