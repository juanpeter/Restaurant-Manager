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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarApenasPendentes = true;
    this.atualizarLista(this.listarApenasPendentes);
  }

  atualizarLista(listarApenasPendentes?: boolean) {

    listarApenasPendentes ?
    this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
      const pedidosFiltrados = pedidos.filter(
        pedido => pedido.situacaoPedido !== 'CANCELADO' && pedido.situacaoPedido !== 'FECHADO')
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
      try {
        const valorTotalPedidos = pedidos
        .filter(pedido => pedido.situacaoPedido !== 'CANCELADO' && pedido.situacaoPedido !== 'FECHADO')
        .map(pedido => pedido.valorPrato)
        .reduce((valorTotal, valorPedido) => valorTotal + valorPedido)
        this.valorTotalPedidos = valorTotalPedidos
      } catch (error) {
        const valorTotalPedidos = 0
        this.valorTotalPedidos = valorTotalPedidos
      }
    })
  }

  concluirPedido(id: String) {
    this.pedidosService.concluir(id).subscribe((retorno: Pedido) => {
      SweetAlert.exibirSucesso(`Pedido de ${retorno.nomePrato} alterado para Concluído`)
      .then(() => {
        this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
          this.listaDePedidos = pedidos;
        })
      })
    })
  }

  cancelarPedido(id: String) {
    this.pedidosService.cancelar(id).subscribe(() => {
      SweetAlert.exibirSucesso(`Pedido cancelado com sucesso`)
      .then(() => {
        this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
          this.listaDePedidos = pedidos;
        })
      })
    })
  }

  detalharPedido(id: String) {
    this.router.navigate([`pedidos/detalhar/${id}`])
  }

  fecharConta() {
    if (this.valorTotalPedidos > 0) {
      this.pedidosService.fecharPendentes().subscribe(() => {
        SweetAlert.exibirSucesso(`Conta paga com sucesso!`)
        .then(() => {
          this.pedidosService.buscar().subscribe((pedidos: Array<Pedido>) => {
            this.listaDePedidos = pedidos;
          })
          this.atualizarValorTotal()
        })
      })
    } else {
      SweetAlert.exibirErro(`Você não possui contas pendentes, por favor, faça um pedido!`)
    }
  }
}
