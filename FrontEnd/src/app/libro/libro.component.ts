import { Component, OnInit } from '@angular/core';
import {Libro} from '../objects/libro';
import {LibroService} from '../libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libros: Libro[];
  skip: number;
  take = 4;

  constructor(private _libroService: LibroService) { }

  ngOnInit() {
    this.skip = 0;
    const libros$ = this._libroService.obtenerCuatro(this.skip + '', this.take + '');
    libros$.subscribe(value => this.libros = value, error1 => console.log(error1));
  }

  obtenerSiguientes() {
    this.skip += 4;
    const autores$ = this._libroService.obtenerCuatro(this.skip + '', this.take + '');
    autores$.subscribe(value => this.libros = value, error1 => console.log(error1));
  }
  obtenerAnteriores() {
    if (this.skip >= 4)
      this.skip -= 4;
    const autores$ = this._libroService.obtenerCuatro(this.skip + '', this.take + '');
    autores$.subscribe(value => this.libros = value, error1 => console.log(error1));
  }

}
