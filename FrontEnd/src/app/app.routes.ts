import {Routes} from "@angular/router";
import {HomeComponent} from "./Componentes/HomeComponent/home.component";
import {LoginComponent} from "./Componentes/LoginComponent/login.component";
import {PeticionTransferenciaComponent} from "./Componentes/Peticion-TransferenciaComponent/peticion-transferencia.component";
import {SeleccionTransferenciaComponent} from "./Componentes/Seleccion-TransferenciaComponent/seleccion-transferencia.component";
import {PerfilComponent} from "./Componentes/PerfilComponent/perfil.component";

export const routes: Routes = [
  {
    path: 'LoginComponent',
    component: LoginComponent},
  {
    path: 'HomeComponent/:idUsuarioActual',
    component: HomeComponent},
  {
    path: 'petTransf/:idUsuarioActual/:idUsuario',
    component: PeticionTransferenciaComponent},
  {
    path: 'selecTransf/:idUsuarioActual/:idLibro',
    component: SeleccionTransferenciaComponent},
  {
    path: 'PerfilComponent/:idUsuarioActual/:idLibro',
    component: PerfilComponent},
  {
    path: '**',
    redirectTo: 'LoginComponent'
  }

];
