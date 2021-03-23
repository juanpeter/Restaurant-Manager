import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/shared/models/pedido';
import { PedidosService } from 'src/app/shared/services/pedidos.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'pedidos-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class PedidosListarComponent implements OnInit {

  @Input() listarApenasPendentes: boolean;

  public listaDePedidos: Array<Pedido> =  new Array<Pedido>();
  public valorTotalPedidos: number;

  constructor(
    private pedidosService: PedidosService,
  ) { }

  ngOnInit(): void {
    this.atualizarLista(this.listarApenasPendentes);
  }

  atualizarLista(listarApenasPendentes?: boolean) {

    listarApenasPendentes ?
    this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
      const pedidosFiltrados = pedidos.filter(pedido => pedido.situacaoPedido !== 'CANCELADO')
      this.listaDePedidos = pedidosFiltrados;
    })
    :
    this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
      this.listaDePedidos = pedidos;

    })

    this.atualizarValorTotal()
    return this.listaDePedidos;
  }

  atualizarValorTotal() {
    this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
      const valorTotalPedidos = pedidos
      .filter(pedido => pedido.situacaoPedido !== 'CANCELADO')
      .map(pedido => pedido.valorPrato)
      .reduce((valorTotal, valorPedido) => valorTotal + valorPedido)
      this.valorTotalPedidos = valorTotalPedidos
    })
  }

  // Lista não está atualizando automaticamente, investigar
  concluirPedido(id: String) {
    this.pedidosService.concluir(id).subscribe((retorno: Pedido) => {
      SweetAlert.exibirSucesso(`Pedido de ${retorno.nomePrato} alterado para Concluído`)
    })
    //Não atualiza automaticamente
    this.atualizarLista();
  }

  cancelarPedido(id: String) {
    this.pedidosService.cancelar(id).subscribe((retorno: Pedido) => {
      SweetAlert.exibirSucesso(`Pedido de ${retorno.nomePrato} Cancelado com sucesso`)
    })
    //Não atualiza automaticamente
    this.atualizarLista();
  }

}
