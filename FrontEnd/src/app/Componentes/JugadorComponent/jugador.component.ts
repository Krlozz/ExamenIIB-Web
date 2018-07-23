import {Component, Input, OnInit} from '@angular/core';
import {JugadorService} from "../../Servicios/jugador.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  listaJugadores = [];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _jugadorService: JugadorService,  private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._jugadorService.getJugadores().subscribe(
      (result: any[]) => {
        this.listaJugadores = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaJugadores.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaJugadores.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
  }

  next() {
    this.paginaActual += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActual -= 1;
    this.obtenerListaAMostrar()
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
