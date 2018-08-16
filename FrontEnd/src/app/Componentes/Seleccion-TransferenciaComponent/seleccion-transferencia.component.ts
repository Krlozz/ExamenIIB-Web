import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/usuario";
import {Libro} from "../../Interfaces/libro";
import {ActivatedRoute, Router} from "@angular/router";
import {LibroService} from "../../Servicios/libro.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {AutorService} from "../../Servicios/autor.service";
import {Autor} from "../../Interfaces/autor";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css'],
  providers: [LibroService, UsuarioService, AutorService]
})
export class SeleccionTransferenciaComponent implements OnInit {

  listaLibros = [];
  autor: Autor;
  libroaTransferir: Libro;
  usuarioActual: Usuario;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _libroService: LibroService,
    private _usuarioService: UsuarioService,
    private _autorService: AutorService,
    private _router: Router,
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getLibroporId(params['idLibro']);
        this.getLibrodeUsuario(params['idUsuarioActual'])
      });
  }

  ngOnInit() {
  }

  getUsuarioActualPorId(idUsuarioActual) {
    this._usuarioService.getUsuarioPorId(idUsuarioActual).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }
  getLibroporId(idLibro) {
    this._libroService.getLibroPorId(idLibro).subscribe(
      (result: any) => {
        this.libroaTransferir =  result[0];
        console.log(this.libroaTransferir);
      }
    )
  }
  getLibrodeUsuario(idUsuarioActual) {
    this._autorService.getAutoresporUsuario(idUsuarioActual).subscribe(
      (result: any) => {
        this.autor = result[0];
        this.getLibrosdeAutor(this.autor.id);
      }
    )
  }
  getLibrosdeAutor(idAutor) {
    this._libroService.getLibroPorAutor(idAutor).subscribe(
      (result: any[]) => {
        this.listaLibros = result;
      }
    )
  }

  irAPerfil(idLibro: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/PerfilComponent', params['idUsuarioActual'], idLibro];
        this._router.navigate(url);
      }
    );
  }

}
