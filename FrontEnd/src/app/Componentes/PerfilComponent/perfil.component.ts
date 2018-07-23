import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/usuario";
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../../Servicios/usuario.service";
import {LibroService} from "../../Servicios/libro.service";
import {Jugador} from "../../Interfaces/libro";
import {AutorService} from "../../Servicios/autor.service";
import {Equipo} from "../../Interfaces/autor";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [LibroService, UsuarioService, AutorService]
})
export class PerfilComponent implements OnInit {

  equipo: Equipo;
  listaPeticiones = [1];
  listaPetBoton = [1];
  usuarioActual: Usuario;
  jugadorSeleccionado: Jugador;
  usuarioDueno: Usuario;
  constructor( private _activatedRoute: ActivatedRoute,
               private _usuarioService: UsuarioService,
               private _jugadorService: LibroService,
               private _equipoService: AutorService,) {
    this._activatedRoute.params.subscribe(
      params=>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getJugadorporId(params['idJugador']);
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
  getJugadorporId(idJugador) {
    this._jugadorService.getLibroPorId(idJugador).subscribe(
      (result: any) => {
        this.jugadorSeleccionado =  result[0];
        console.log(this.jugadorSeleccionado);
        this.getJugadordeUsuario(this.jugadorSeleccionado.id);
      }
    );
  }
  getJugadordeUsuario(id) {
    this._equipoService.getAutoresporUsuario(id).subscribe(
      (result: any) => {
        this.equipo = result[0];
        console.log(this.equipo);
        this.getJugadoresdeEquipo(this.equipo.id);
      }
    )
  }
  getJugadoresdeEquipo(usuarioIdId) {
    this._usuarioService.getUsuarioPorId(usuarioIdId).subscribe(
      (result: any) => {
        this.usuarioDueno =  result[0];
      }
    )
  }
}
