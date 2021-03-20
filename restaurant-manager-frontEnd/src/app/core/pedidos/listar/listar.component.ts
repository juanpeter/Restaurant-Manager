import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/shared/models/pedido';
import { PedidosService } from 'src/app/shared/services/pedidos.service';

@Component({
  selector: 'pedidos-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class PedidosListarComponent implements OnInit {

  public listaDePedidos: Array<Pedido> =  new Array<Pedido>();

  constructor(
    private pedidosService: PedidosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
      this.listaDePedidos = pedidos;
      console.log(this.listaDePedidos)
    })
  }

  incluir() {
  }

  concluir() {
  }

  cancelar() {
  }

  editarPedido() {
  }
}
