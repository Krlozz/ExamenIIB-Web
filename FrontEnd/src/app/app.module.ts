import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/LoginComponent/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Componentes/HomeComponent/home.component';
import { UsuarioComponent } from './Componentes/UsuarioComponent/usuario.component';
import { EquipoComponent } from './Componentes/EquipoComponent/equipo.component';
import { JugadorComponent } from './Componentes/JugadorComponent/jugador.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BarraSuperiorComponent } from './Componentes/Barra-SuperiorComponent/barra-superior.component';
import {MatIconModule} from '@angular/material/icon';
import { PeticionTransferenciaComponent } from './Componentes/Peticion-TransferenciaComponent/peticion-transferencia.component';
import { SeleccionTransferenciaComponent } from './Componentes/Seleccion-TransferenciaComponent/seleccion-transferencia.component';
import { PerfilComponent } from './Componentes/PerfilComponent/perfil.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent,
    EquipoComponent,
    JugadorComponent,
    BarraSuperiorComponent,
    PeticionTransferenciaComponent,
    SeleccionTransferenciaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      {
        useHash: true}),
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
