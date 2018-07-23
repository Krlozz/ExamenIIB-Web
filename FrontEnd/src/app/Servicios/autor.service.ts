import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class AutorService {

  constructor(private http: HttpClient) {
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getAutores() {
    let header = AutorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/autor",{headers: header});
  }
  getAutorBusqueda(parametroBusqueda) {
    let header = AutorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/autor/" + parametroBusqueda ,{headers: header});
  }
  getAutoresporUsuario(idUsuario) {
    let header = AutorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/autor/porUsuario/" + idUsuario ,{headers: header});
  }

}
