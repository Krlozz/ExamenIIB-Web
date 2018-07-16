import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Libro} from './objects/libro';
import {Observable} from 'rxjs';
import {Autor} from './objects/autor';
import {Usuario} from './objects/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  url = 'http://localhost:3000/autor';

  constructor(private _httpClient: HttpClient) { }

  obtenerUno(id: string): Observable<Autor> {
    return this._httpClient.get<Autor>(this.url + `/${id}`);
  }

  obtenerDos(skip: string, take: string): Observable<Autor[]> {
    return this._httpClient.get<Autor[]>(this.url + `?skip=${skip}&take=${take}`);
  }

  obtenerTodos(): Observable<Autor[]> {
    return this._httpClient.get<Autor[]>(this.url);
  }

  obtenerLike(lk: string): Observable<Autor[]>{
    return this._httpClient.get<Autor[]>(this.url + `/search/${lk}`);
  }
}

