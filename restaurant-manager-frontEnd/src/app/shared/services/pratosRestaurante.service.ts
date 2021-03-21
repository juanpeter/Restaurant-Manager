import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PratoRestaurante } from '../models/pratoRestaurante';

@Injectable({
  providedIn: 'root'
})
export class PratosRestauranteService {

  constructor(
    private httpClient: HttpClient,
    ) { }

  buscar() {
    return this.httpClient.get(`${environment.urlBackEnd}/pratos`)
  }

  buscarPorId(id: any) {
    return this.httpClient.get(`${environment.urlBackEnd}/pratos${id}`)
  }

  incluir(pratoRestaurante: PratoRestaurante) {
    return this.httpClient.post(`${environment.urlBackEnd}/pratos`, pratoRestaurante);
  }

  deletar(id: any) {
    return this.httpClient.delete(`${environment.urlBackEnd}/pratos/excluir/${id}`)
  }

  alterar(id: any, pratoRestaurante: PratoRestaurante) {
    return this.httpClient.put(`${environment.urlBackEnd}/pratos/alterar/${id}`, pratoRestaurante)
  }

}
