import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from './objects/usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuario';

  constructor(private _httpClient: HttpClient) {}

  obtenerUno(id: string): Observable<Usuario> {
    return this._httpClient.get<Usuario>(this.url + `/${id}`);
  }

  obtenerCuatro(skip: string, take: string): Observable<Usuario[]>{
    return this._httpClient.get<Usuario[]>(this.url + `?skip=${skip}&take=${take}`);
  }

  obtenerTodos(): Observable<Usuario[]> {
    return this._httpClient.get<Usuario[]>(this.url);
  }

  obtenerLike(lk: string): Observable<Usuario[]>{
    return this._httpClient.get<Usuario[]>(this.url + `/search/${lk}`);
  }
}
