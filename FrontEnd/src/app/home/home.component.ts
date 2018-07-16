import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../objects/usuario';
import {ActivatedRoute} from '@angular/router';
import {Libro} from '../objects/libro';
import {Autor} from '../objects/autor';
import {LibroService} from '../libro.service';
import {AutorService} from '../autor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;
  usuarios: Usuario[];

  userSearch: Usuario[];
  libroSearch: Libro[];
  autorSearch: Autor[];
  constructor(private _usuarioService: UsuarioService,
              private _libroService: LibroService,
              private _autorService: AutorService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const usuario$ = this._usuarioService.obtenerUno(id + '');

    usuario$.subscribe(value => {
      this.usuario = value;
    }, error1 => {
    });
  }

  buscar(busqueda) {
    const lk = busqueda.value;
    const userSearch$ = this._usuarioService.obtenerLike(lk);
    userSearch$.subscribe(value => this.userSearch = value,  error1 => console.log(error1));

    const libroSearch$ = this._libroService.obtenerLike(lk);
    libroSearch$.subscribe(value => this.libroSearch = value,  error1 => console.log(error1));

    const autorSearch$ = this._autorService.obtenerLike(lk);
    autorSearch$.subscribe(value => this.autorSearch = value,  error1 => console.log(error1));
  }

}
