import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PratoRestaurante } from 'src/app/shared/models/pratoRestaurante';
import { PratosRestauranteService } from 'src/app/shared/services/pratosRestaurante.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'pratos-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class PratosCadastrarComponent implements OnInit {

  public formulario: FormGroup  = new FormGroup({
    nomePrato: new FormControl(),
    valorPrato: new FormControl()
  });

  get nomePrato(): any { return this.formulario.get('nomePrato') }
  get valorPrato(): any { return this.formulario.get('valorPrato') }

  constructor(
    private formBuilder: FormBuilder,
    private pratosRestauranteService: PratosRestauranteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nomePrato: [null, Validators.required],
      valorPrato: [null, Validators.required],
    })
  }

  submit() {
    if (this.formulario.valid) {
      const prato: PratoRestaurante = new PratoRestaurante();

      prato.nomePrato = this.nomePrato.value;
      prato.valorPrato = this.valorPrato.value;

      this.pratosRestauranteService.incluir(prato).subscribe((retorno: PratoRestaurante) => {
        SweetAlert.exibirSucesso('Prato ' + retorno.nomePrato + ' adicionado com sucesso!').then(() => {
          this.router.navigate(['pratos']);
        })
      })
    } else {
      SweetAlert.exibirErro('Formulário Inválido')
    }
  }

}
