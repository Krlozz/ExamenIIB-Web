import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {AutorizacionService} from '../autorizacion.service';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home/:id', component: HomeComponent, canActivate: [ AutorizacionService ]}];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutesModule { }
