import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material";
import {UsuarioService} from "../../Servicios/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() listaUsuarios = [];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService,  private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this._usuarioService.getUsuarios().subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        console.log(this.listaUsuarios);
        this.obtenerCantidadPaginas();
        this.obtenerListaAMostrar();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaUsuarios.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaUsuarios.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
  }

  next() {
    this.paginaActual += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActual -= 1;
    this.obtenerListaAMostrar()
  }

  irAPeticionesDeTransferencia(idUsuarioActual: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/petTransf', params['idUsuarioActual'] ,idUsuarioActual];
        this._router.navigate(url);
      }
    );
  }
}
