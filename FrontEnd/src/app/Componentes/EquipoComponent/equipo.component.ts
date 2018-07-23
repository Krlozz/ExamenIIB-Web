import {Component, Input, OnInit} from '@angular/core';
import {EquipoService} from "../../Servicios/equipo.service";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  listaEquipos = [];
  numeroItems = 2;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _equipoService: EquipoService) { }

  ngOnInit() {
    this._equipoService.getEquipos().subscribe(
      (result: any[]) => {
        this.listaEquipos = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaEquipos.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaEquipos.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
  }

  next() {
    this.paginaActual += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActual -= 1;
    this.obtenerListaAMostrar()
  }
}
