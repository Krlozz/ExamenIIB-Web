import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/usuario";
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../../Servicios/usuario.service";
import {LibroService} from "../../Servicios/libro.service";
import {Libro} from "../../Interfaces/libro";
import {AutorService} from "../../Servicios/autor.service";
import {Autor} from "../../Interfaces/autor";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [LibroService, UsuarioService, AutorService]
})
export class PerfilComponent implements OnInit {

  autor: Autor;
  listaPeticiones = [1];
  listaPetBoton = [1];
  usuarioActual: Usuario;
  libroSeleccionado: Libro;
  usuarioDueno: Usuario;
  constructor( private _activatedRoute: ActivatedRoute,
               private _usuarioService: UsuarioService,
               private _libroService: LibroService,
               private _autorService: AutorService,) {
    this._activatedRoute.params.subscribe(
      params=>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getLibroporId(params['idLibro']);
      }
    )

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
        this.libroSeleccionado =  result[0];
        console.log(this.libroSeleccionado);
        this.getLibrodeUsuario(this.libroSeleccionado.id);
      }
    );
  }
  getLibrodeUsuario(id) {
    this._autorService.getAutoresporUsuario(id).subscribe(
      (result: any) => {
        this.autor = result[0];
        console.log(this.autor);
        this.getLibrosdeAutor(this.autor.id);
      }
    )
  }
  getLibrosdeAutor(usuarioIdId) {
    this._usuarioService.getUsuarioPorId(usuarioIdId).subscribe(
      (result: any) => {
        this.usuarioDueno =  result[0];
      }
    )
  }
}
