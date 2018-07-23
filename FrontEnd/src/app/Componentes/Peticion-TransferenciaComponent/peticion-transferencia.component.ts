import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AutorService} from "../../Servicios/autor.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {LibroService} from "../../Servicios/libro.service";
import {Usuario} from "../../Interfaces/usuario";

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css'],
  providers: [AutorService,UsuarioService, LibroService]
})
export class PeticionTransferenciaComponent implements OnInit {

  usuario: Usuario;
  listaAutor = [];
  listaLibros = [];
  usuarioActual: Usuario;

  constructor(private _activatedRoute: ActivatedRoute,
              private _equipoService: AutorService,
              private _usuarioService: UsuarioService,
              private _jugadorService: LibroService,
              private _router: Router,
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getUsuarioPorId(params['idUsuario']);
        this.getAutorPorUsuario(params['idUsuario']);
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
  getAutorPorUsuario(idUsuario) {
    this._equipoService.getAutoresporUsuario(idUsuario).subscribe(
      (result: any[]) => {
        this.listaAutor = result;
        this.getLibroPorAutor(this.listaAutor[0].id);
      }
    );
  }
  getLibroPorAutor(idEquipo) {
    this._jugadorService.getLibroPorAutor(idEquipo).subscribe(
      (result: any[]) => {
        this.listaLibros = result;
      }
    )
  }

  irASeleccionTransferencia(idLibro: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/selecTransf', params['idUsuarioActual'],idLibro];
        this._router.navigate(url);
      }
    );
  }
}
