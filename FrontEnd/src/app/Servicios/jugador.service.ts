import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class JugadorService {

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

  getJugadores() {
    let header = JugadorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/jugador",{headers: header});
  }
  getJugadorBusqueda(parametroBusqueda) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/jugador/" + parametroBusqueda ,{headers: header});
  }
  getJugadorPorEquipo(idEquipo) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/jugador/porEquipo/" + idEquipo ,{headers: header});
  }
  getJugadorPorId(idJugador) {
    let header = JugadorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/jugador/por/id/" + idJugador ,{headers: header});
  }
}
