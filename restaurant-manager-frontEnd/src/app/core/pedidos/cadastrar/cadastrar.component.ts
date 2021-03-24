import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pedido } from 'src/app/shared/models/pedido';
import { PratoRestaurante } from 'src/app/shared/models/pratoRestaurante';
import { PedidosService } from 'src/app/shared/services/pedidos.service';
import { PratosRestauranteService } from 'src/app/shared/services/pratosRestaurante.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'pedidos-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class PedidosCadastrarComponent implements OnInit {

  @Input() prato: PratoRestaurante;
  @Input() mesa: number;

  public listaDePratos: Array<PratoRestaurante> = new Array<PratoRestaurante>();

  public formulario: FormGroup = new FormGroup({
    mesaSelecionada: new FormControl(),
    pratoSelecionado: new FormControl(),
  });

  get mesaSelecionada(): any { return this.formulario.get('mesaSelecionada') }
  get pratoSelecionado(): any { return this.formulario.get('pratoSelecionado') }

  constructor(
    private formBuilder: FormBuilder,
    private pratosRestauranteService: PratosRestauranteService,
    private pedidosService: PedidosService,
  ) { }

  ngOnInit(): void {

    this.pratosRestauranteService.buscar().subscribe((pratos: Array<PratoRestaurante>) => {
      this.listaDePratos = pratos;
    })
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      mesaSelecionada: [null, Validators.required],
      pratoSelecionado: [null, Validators.required],
    })
  }

  submit() {
    if (this.formulario.valid) {
      const pedido: Pedido = new Pedido();

      pedido.nomePrato = this.prato.nomePrato;
      pedido.valorPrato = this.prato.valorPrato;
      pedido.mesa = this.mesa;

      this.pedidosService.incluir(pedido).subscribe((retorno: Pedido) => {
        SweetAlert.exibirSucesso(`Pedido de ${retorno.nomePrato} para a mesa ${retorno.mesa} realizado com sucesso!`)
      })

    } else {
      SweetAlert.exibirErro('Formulário Inválido')
    }
  }

}
