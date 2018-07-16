import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Libro} from './objects/libro';
import {Usuario} from './objects/usuario';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  url = 'http://localhost:3000/libro';

  constructor(private _httpClient: HttpClient) { }

  obtenerUno(id: string): Observable<Libro> {
    return this._httpClient.get<Libro>(this.url + `/${id}`);
  }

  obtenerCuatro(skip: string, take: string): Observable<Libro[]> {
    return this._httpClient.get<Libro[]>(this.url + `?skip=${skip}&take=${take}`);
  }

  obtenerTodos(): Observable<Libro[]> {
    return this._httpClient.get<Libro[]>(this.url);
  }
  obtenerLike(lk: string): Observable<Libro[]>{
    return this._httpClient.get<Libro[]>(this.url + `/search/${lk}`);
  }
}
