import { Component, Input, OnInit } from '@angular/core';
import { PratoRestaurante } from 'src/app/shared/models/pratoRestaurante';
import { PratosRestauranteService } from 'src/app/shared/services/pratosRestaurante.service';

// interface City {
//   name: string,
//   code: string
// }

@Component({
  selector: 'pedidos-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class PedidosCadastrarComponent implements OnInit {

  // cities: City[];

  // selectedCity: City;

  @Input() pratoSelecionado: PratoRestaurante;


  public listaDePratos: Array<PratoRestaurante> = new Array<PratoRestaurante>();

  constructor(
    private pratosRestauranteService: PratosRestauranteService,
  ) { }

  ngOnInit(): void {

    this.pratosRestauranteService.buscar().subscribe((pratos: Array<PratoRestaurante>) => {
      this.listaDePratos = pratos;
    })
    console.log(this.listaDePratos)

  }

  submit() {
    console.log(this.pratoSelecionado.nomePrato)
    // pedido = new
  }

}
