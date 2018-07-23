import {Component, Input, OnInit} from '@angular/core';
import {AutorService} from "../../Servicios/autor.service";
import {LibroService} from "../../Servicios/libro.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../Interfaces/usuario";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AutorService, LibroService, UsuarioService]
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

  //Autor
  listaAutores = [];
  autor_numeroItems = 2;
  autor_cantidadPaginas;
  autor_listaAMostrar;
  autor_paginaActual: number = 1;

  //Libro
  listaLibros = [];
  libro_numeroItems = 4;
  libro_cantidadPaginas;
  libro_listaAMostrar;
  libro_paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService,
              private _autorService: AutorService,
              private _libroService: LibroService,
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
    this._autorService.getAutores().subscribe(
      (result: any[]) => {
        this.listaAutores = result;
        this.autor_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaAutores, this.autor_numeroItems);
        this.autor_listaAMostrar = this.obtenerListaAMostrar(this.listaAutores, this.autor_paginaActual, this.autor_numeroItems);
      }
    );
    this._libroService.getLibros().subscribe(
      (result: any[]) => {
        this.listaLibros = result;
        this.libro_cantidadPaginas = this.obtenerCantidadPaginas(this.listaLibros, this.libro_numeroItems);
        this.libro_listaAMostrar = this.obtenerListaAMostrar(this.listaLibros, this.libro_paginaActual, this.libro_numeroItems);
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
    //Autor
    this._autorService.getAutorBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaAutores = result;
        this.autor_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaAutores, this.autor_numeroItems);
        this.autor_listaAMostrar = this.obtenerListaAMostrar(this.listaAutores, this.autor_paginaActual, this.autor_numeroItems);
    }
    );
    //Libro
    this._libroService.getLibroBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaLibros = result;
        this.libro_cantidadPaginas = this.obtenerCantidadPaginas(this.listaLibros, this.libro_numeroItems);
        this.libro_listaAMostrar = this.obtenerListaAMostrar(this.listaLibros, this.libro_paginaActual, this.libro_numeroItems);
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

  nextAutor() {
    this.autor_paginaActual += 1;
    this.autor_listaAMostrar = this.obtenerListaAMostrar(this.listaAutores, this.autor_paginaActual, this.autor_numeroItems)
  }
  prevAutor() {
    this.autor_paginaActual -= 1;
    this.autor_listaAMostrar = this.obtenerListaAMostrar(this.listaAutores, this.autor_paginaActual, this.autor_numeroItems)
  }

  nextLibro() {
    this.libro_paginaActual += 1;
    this.libro_listaAMostrar = this.obtenerListaAMostrar(this.listaLibros, this.libro_paginaActual, this.libro_numeroItems);
  }
  prevLibro() {
    this.libro_paginaActual -= 1;
    this.libro_listaAMostrar = this.obtenerListaAMostrar(this.listaLibros, this.libro_paginaActual, this.libro_numeroItems);
  }

  irAPeticionesDeTransferencia(idUsuarioActual: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/petTransf', params['idUsuarioActual'] ,idUsuarioActual];
        this._router.navigate(url);
      }
    );
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
