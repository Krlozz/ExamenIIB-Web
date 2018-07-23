import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class EquipoService {

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

  getEquipos() {
    let header = EquipoService.getCommonHeaders();
    return this.http.get("http://localhost:1337/equipo",{headers: header});
  }
  getEquipoBusqueda(parametroBusqueda) {
    let header = EquipoService.getCommonHeaders();
    return this.http.get("http://localhost:1337/equipo/" + parametroBusqueda ,{headers: header});
  }
  getEquiposporUsuario(idUsuario) {
    let header = EquipoService.getCommonHeaders();
    return this.http.get("http://localhost:1337/equipo/porUsuario/" + idUsuario ,{headers: header});
  }



}
