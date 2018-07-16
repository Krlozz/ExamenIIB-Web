import { Component, OnInit } from '@angular/core';
import {Usuario} from '../objects/usuario';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  skip: number;
  take = 4;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.skip = 0;
    const usuarios$ = this._usuarioService.obtenerCuatro(this.skip + '', this.take + '');
    usuarios$.subscribe(value => this.usuarios = value, error1 => console.log(error1));
  }
  obtenerSiguientes() {
    this.skip += 4;
    const usuarios$ = this._usuarioService.obtenerCuatro(this.skip + '', this.take + '');
    usuarios$.subscribe(value => this.usuarios = value, error1 => console.log(error1));
  }
  obtenerAnteriores() {
    if (this.skip >= 4)
      this.skip -= 4;
    const usuarios$ = this._usuarioService.obtenerCuatro(this.skip + '', this.take + '');
    usuarios$.subscribe(value => this.usuarios = value, error1 => console.log(error1));
  }
}
