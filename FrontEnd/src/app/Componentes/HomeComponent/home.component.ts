import {Component, Input, OnInit} from '@angular/core';
import {EquipoService} from "../../Servicios/equipo.service";
import {JugadorService} from "../../Servicios/jugador.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../Interfaces/usuario";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EquipoService, JugadorService, UsuarioService]
})
export class HomeComponent implements OnInit {

  datoABuscar;
  usuarioActual: Usuario;

  //Usuario
  listaUsuarios = [];
  usuario_numeroItems = 4;
  usuario_cantidadPaginas;
  usuario_listaAMostrar;
  usuario_paginaActual: number = 1;

  //Equipo
  listaEquipos = [];
  equipo_numeroItems = 2;
  equipo_cantidadPaginas;
  equipo_listaAMostrar;
  equipo_paginaActual: number = 1;

  //Jugador
  listaJugadores = [];
  jugador_numeroItems = 4;
  jugador_cantidadPaginas;
  jugador_listaAMostrar;
  jugador_paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService,
              private _equipoServcie: EquipoService,
              private _jugadorService: JugadorService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioPorId(params['idUsuarioActual']);
      });
  }

  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe(
      (result: any[]) => {
        this.listaUsuarios =  result;
        this.usuario_cantidadPaginas = this.obtenerCantidadPaginas(this.listaUsuarios,this.usuario_numeroItems);
        this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
      }
    );
    this._equipoServcie.getEquipos().subscribe(
      (result: any[]) => {
        this.listaEquipos = result;
        this.equipo_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaEquipos, this.equipo_numeroItems);
        this.equipo_listaAMostrar = this.obtenerListaAMostrar(this.listaEquipos, this.equipo_paginaActual, this.equipo_numeroItems);
      }
    );
    this._jugadorService.getJugadores().subscribe(
      (result: any[]) => {
        this.listaJugadores = result;
        this.jugador_cantidadPaginas = this.obtenerCantidadPaginas(this.listaJugadores, this.jugador_numeroItems);
        this.jugador_listaAMostrar = this.obtenerListaAMostrar(this.listaJugadores, this.jugador_paginaActual, this.jugador_numeroItems);
      }
    );
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }

  cargarDatosbusqueda() {

    //Usuarios
    this._usuarioService.getUsuariosBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        this.usuario_cantidadPaginas = this.obtenerCantidadPaginas(this.listaUsuarios,this.usuario_numeroItems);
        this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems);
      }
    );
    //Equipo
    this._equipoServcie.getEquipoBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaEquipos = result;
        this.equipo_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaEquipos, this.equipo_numeroItems);
        this.equipo_listaAMostrar = this.obtenerListaAMostrar(this.listaEquipos, this.equipo_paginaActual, this.equipo_numeroItems);
    }
    );
    //Jugador
    this._jugadorService.getJugadorBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaJugadores = result;
        this.jugador_cantidadPaginas = this.obtenerCantidadPaginas(this.listaJugadores, this.jugador_numeroItems);
        this.jugador_listaAMostrar = this.obtenerListaAMostrar(this.listaJugadores, this.jugador_paginaActual, this.jugador_numeroItems);
      }
    );
  }

  obtenerCantidadPaginas(lista: any [], numeroItems): number {

    let cantidadPaginas: number = lista.length/numeroItems;
    if (!Number.isInteger(cantidadPaginas)) {
      cantidadPaginas = cantidadPaginas + 1;
      cantidadPaginas = Number.parseInt(cantidadPaginas.toString());
    }
    return cantidadPaginas;
  }

  obtenerListaAMostrar(listaUsuarios: any [], paginaActual, numeroItems): any [] {
    let lista = listaUsuarios.slice(paginaActual*numeroItems - numeroItems, paginaActual*numeroItems);
    return lista;
  }

  nextUsuario() {
    this.usuario_paginaActual += 1;
    this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
  }
  prevUsuario() {
    this.usuario_paginaActual -= 1;
    this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
  }

  nextEquipo() {
    this.equipo_paginaActual += 1;
    this.equipo_listaAMostrar = this.obtenerListaAMostrar(this.listaEquipos, this.equipo_paginaActual, this.equipo_numeroItems)
  }
  prevEquipo() {
    this.equipo_paginaActual -= 1;
    this.equipo_listaAMostrar = this.obtenerListaAMostrar(this.listaEquipos, this.equipo_paginaActual, this.equipo_numeroItems)
  }

  nextJugador() {
    this.jugador_paginaActual += 1;
    this.jugador_listaAMostrar = this.obtenerListaAMostrar(this.listaJugadores, this.jugador_paginaActual, this.jugador_numeroItems);
  }
  prevJugador() {
    this.jugador_paginaActual -= 1;
    this.jugador_listaAMostrar = this.obtenerListaAMostrar(this.listaJugadores, this.jugador_paginaActual, this.jugador_numeroItems);
  }

  irAPeticionesDeTransferencia(idUsuarioActual: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/petTransf', params['idUsuarioActual'] ,idUsuarioActual];
        this._router.navigate(url);
      }
    );
  }

  irASeleccionTransferencia(idJugador: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/selecTransf', params['idUsuarioActual'],idJugador];
        this._router.navigate(url);
      }
    );
  }
}
