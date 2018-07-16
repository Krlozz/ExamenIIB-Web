import { Component, OnInit } from '@angular/core';
import {Autor} from '../objects/autor';
import {AutorService} from '../autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autores: Autor[];
  take = 2;
  skip: number;

  constructor(private _autorService: AutorService) { }

  ngOnInit() {
    this.skip = 0;
    const autores$ = this._autorService.obtenerDos(this.skip + '', this.take + '');
    autores$.subscribe(value => this.autores = value, error1 => console.log(error1));
  }

  obtenerSiguientes(){
    this.skip += 2;
    const autores$ = this._autorService.obtenerDos(this.skip + '', this.take + '');
    autores$.subscribe(value => this.autores = value, error1 => console.log(error1));
  }
  obtenerAnteriores() {
    if(this.skip >= 2)
      this.skip -= 2;
    const autores$ = this._autorService.obtenerDos(this.skip + '', this.take + '');
    autores$.subscribe(value => this.autores = value, error1 => console.log(error1));
  }
}
