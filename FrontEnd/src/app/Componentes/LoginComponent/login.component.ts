import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../Servicios/usuario.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  password: String = '';
  respuesta;

  constructor(private _usuarioService: UsuarioService,
              private _router: Router) {
    this.usuario = 'carlos.ayala@hotmail.com';
    this.password = '12345';
  }

  ngOnInit() {
  }

  ingresar() {
    this._usuarioService.getUsuariosPorNombre(this.usuario, this.passsword).subscribe(
      (result: any) => {
        this.respuesta = result;
        console.log(this.respuesta);

        if (true) {
          const url = ['/HomeComponent', this.respuesta.id];
          this._router.navigate(url);
        }else {

        }
      }
    );
  }
}
