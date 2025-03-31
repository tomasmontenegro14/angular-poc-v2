import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Clientes } from '../app/modelos/cliente-modelos';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = `http://45.179.163.10:8080/API/v1/cliente`;

  constructor(private http: HttpClient) { }

  obtenerClientes(incluirInactivos: boolean = false): Observable<Clientes> {
    let params = new HttpParams();
    params = params.append('incluirInactivos', incluirInactivos);

    return this.http.get<Clientes>(`${this.url}`, { params });
  }
}
