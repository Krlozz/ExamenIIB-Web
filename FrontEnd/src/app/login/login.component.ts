import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Usuario} from '../objects/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
              private _httpClient: HttpClient,) { }

  ngOnInit() {

  }

  login(formulario) {
    const username = formulario.controls.email.value;
    const password = formulario.controls.password.value;
    const rutaLogin = '/';
    const rutaHome = '/home';

    const usuario: Usuario = {
      id: 0,
      usuario: username,
      password: password,
      imagenUrl: ''
    };

    const body = `usuario=${usuario.usuario}&password=${usuario.password}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
      })
    };


    const login$ = this._httpClient
      .post<Usuario>('http://localhost:3000/usuario/login', body, httpOptions);
    login$.subscribe(
      value => {
          this._router.navigate(['/home',  value.id]);
      },
        error1 => {
          this._router.navigate([rutaLogin]);
        },
      () => {
      });
  }
}
