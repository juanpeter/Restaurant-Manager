import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/shared/models/pedido';
import { PedidosService } from 'src/app/shared/services/pedidos.service';

@Component({
  selector: 'pedidos-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class PedidosDetalharComponent implements OnInit {

  public pedido: Pedido = new Pedido();

  constructor(
    private pedidosService: PedidosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obterPedido();
  }

  obterPedido() {
    const idPedido = this.activatedRoute.snapshot.paramMap.get('id');
    this.pedidosService.buscarPorId(idPedido).subscribe((pedido: Pedido) => {
      this.pedido.mesa = pedido.mesa
      this.pedido.nomePrato = pedido.nomePrato
      this.pedido.numeroPedido = pedido.numeroPedido
      this.pedido.situacaoPedido = pedido.situacaoPedido
      this.pedido.valorPrato = pedido.valorPrato
    })
    return this.pedido
  }

  voltarRota() {
    this.router.navigate([`pedidos/`])
  }

}
