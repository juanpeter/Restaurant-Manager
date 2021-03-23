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

  constructor(
    private pedidosService: PedidosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.atualizarLista(this.listarApenasPendentes);
  }

  atualizarLista(listarApenasPendentes?: boolean) {

    listarApenasPendentes ?
    this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
      const pedidosFiltrados = pedidos.filter(pedido => pedido.situacaoPedido !== 'CANCELADO')
      this.listaDePedidos = pedidosFiltrados;
      console.log(this.listaDePedidos)
    })
    :
    this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
      this.listaDePedidos = pedidos;
      console.log(this.listaDePedidos)

    })

    return this.listaDePedidos;
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

  detalharPedido() {
  }
}
