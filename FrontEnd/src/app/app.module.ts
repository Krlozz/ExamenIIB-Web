import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutesModule} from './routes/routes.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AutorComponent } from './autor/autor.component';
import { LibroComponent } from './libro/libro.component';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AutorDetailComponent } from './autor-detail/autor-detail.component';
import { LibroDetailComponent } from './libro-detail/libro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent,
    AutorComponent,
    LibroComponent,
    UserDetailComponent,
    AutorDetailComponent,
    LibroDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
