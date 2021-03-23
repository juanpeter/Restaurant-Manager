import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient: HttpClient) { }

  incluir(pedido: Pedido) {
    return this.httpClient.post(`${environment.urlBackEnd}/pedidos`, pedido);
  }

  buscar() {
    return this.httpClient.get(`${environment.urlBackEnd}/pedidos`)
  }

  concluir(id: any) {
    return this.httpClient.patch(`${environment.urlBackEnd}/pedidos/concluir/${id}`, false)
  }

  cancelar(id: any) {
    return this.httpClient.patch(`${environment.urlBackEnd}/pedidos/cancelar/${id}`, false)
  }

  buscarPorId(id: any) {
    return this.httpClient.get(`${environment.urlBackEnd}/pedidos/${id}`)
  }

}
