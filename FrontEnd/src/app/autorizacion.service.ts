import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CredencialesService} from './credenciales.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Intenta entrar');
    const url = ['home'];
    return true;
  }

  constructor(
    private _credencialesService: CredencialesService,
    private _router: Router) { }
}
