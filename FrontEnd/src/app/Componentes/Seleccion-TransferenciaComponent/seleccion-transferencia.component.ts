import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/usuario";
import {Jugador} from "../../Interfaces/libro";
import {ActivatedRoute, Router} from "@angular/router";
import {LibroService} from "../../Servicios/libro.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {AutorService} from "../../Servicios/autor.service";
import {Equipo} from "../../Interfaces/autor";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css'],
  providers: [LibroService, UsuarioService, AutorService]
})
export class SeleccionTransferenciaComponent implements OnInit {

  listaJugadores = [];
  equipo: Equipo;
  jugadoraTransferir: Jugador;
  usuarioActual: Usuario;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _jugadorService: LibroService,
    private _usuarioService: UsuarioService,
    private _equipoService: AutorService,
    private _router: Router,
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getJugadorporId(params['idJugador']);
        this.getJugadordeUsuario(params['idUsuarioActual'])
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
  getJugadorporId(idJugador) {
    this._jugadorService.getLibroPorId(idJugador).subscribe(
      (result: any) => {
        this.jugadoraTransferir =  result[0];
        console.log(this.jugadoraTransferir);
      }
    )
  }
  getJugadordeUsuario(idUsuarioActual) {
    this._equipoService.getAutoresporUsuario(idUsuarioActual).subscribe(
      (result: any) => {
        this.equipo = result[0];
        this.getJugadoresdeEquipo(this.equipo.id);
      }
    )
  }
  getJugadoresdeEquipo(idEquipo) {
    this._jugadorService.getLibroPorAutor(idEquipo).subscribe(
      (result: any[]) => {
        this.listaJugadores = result;
      }
    )
  }

  irAPerfil(idJugador: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/PerfilComponent', params['idUsuarioActual'], idJugador];
        this._router.navigate(url);
      }
    );
  }

}
