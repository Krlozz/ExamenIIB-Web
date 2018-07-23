import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {EquipoService} from "../../Servicios/equipo.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {JugadorService} from "../../Servicios/jugador.service";
import {Usuario} from "../../Interfaces/usuario";

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css'],
  providers: [EquipoService,UsuarioService, JugadorService]
})
export class PeticionTransferenciaComponent implements OnInit {

  usuario: Usuario;
  listaEquipo = [];
  listaJugadores = [];
  usuarioActual: Usuario;

  constructor(private _activatedRoute: ActivatedRoute,
              private _equipoService: EquipoService,
              private _usuarioService: UsuarioService,
              private _jugadorService: JugadorService,
              private _router: Router,
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getUsuarioPorId(params['idUsuario']);
        this.getEquipoPorUsuario(params['idUsuario']);
      });
  }
  ngOnInit() {
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuario =  result[0];
      }
    )
  }
  getUsuarioActualPorId(idUsuarioActual) {
    this._usuarioService.getUsuarioPorId(idUsuarioActual).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }
  getEquipoPorUsuario(idUsuario) {
    this._equipoService.getEquiposporUsuario(idUsuario).subscribe(
      (result: any[]) => {
        this.listaEquipo = result;
        this.getJugadorPorEquipo(this.listaEquipo[0].id);
      }
    );
  }
  getJugadorPorEquipo(idEquipo) {
    this._jugadorService.getJugadorPorEquipo(idEquipo).subscribe(
      (result: any[]) => {
        this.listaJugadores = result;
      }
    )
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
