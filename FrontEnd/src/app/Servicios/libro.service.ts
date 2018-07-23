import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class LibroService {

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

  getLibros() {
    let header = LibroService.getCommonHeaders();
    return this.http.get("http://localhost:1337/libro",{headers: header});
  }
  getLibroBusqueda(parametroBusqueda) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/libro/" + parametroBusqueda ,{headers: header});
  }
  getLibroPorAutor(idAutor) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/libro/porAutor/" + idAutor ,{headers: header});
  }
  getLibroPorId(idLibro) {
    let header = LibroService.getCommonHeaders();
    return this.http.get("http://localhost:1337/libro/por/id/" + idLibro ,{headers: header});
  }
}
