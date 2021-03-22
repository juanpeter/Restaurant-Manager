import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PratoRestaurante } from 'src/app/shared/models/pratoRestaurante';
import { PratosRestauranteService } from 'src/app/shared/services/pratosRestaurante.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'pratos-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class PratosAlterarComponent implements OnInit {

  public formulario: FormGroup  = new FormGroup({
    nomePrato: new FormControl(),
    valorPrato: new FormControl()
  });

  get idPrato(): any { return this.formulario.get('idPrato') }
  get nomePrato(): any { return this.formulario.get('nomePrato') }
  get valorPrato(): any { return this.formulario.get('valorPrato') }

  constructor(
    private formBuilder: FormBuilder,
    private pratosRestauranteService: PratosRestauranteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idPrato = this.activatedRoute.snapshot.paramMap.get('id');
    this.pratosRestauranteService.buscarPorId(idPrato).subscribe((prato: any) => {
      this.formulario = this.formBuilder.group({
        idPrato: [prato.idPrato, Validators.required],
        nomePrato: [prato.nomePrato, Validators.required],
        valorPrato: [prato.valorPrato, Validators.required]
      })
    })
  }

  submit() {
    if (this.formulario.valid) {
      const prato: PratoRestaurante = new PratoRestaurante();

      prato.nomePrato = this.nomePrato.value;
      prato.valorPrato = this.valorPrato.value;

      this.pratosRestauranteService.alterar(this.idPrato.value, prato).subscribe((retorno: PratoRestaurante) => {
        SweetAlert.exibirSucesso('Prato ' + retorno.nomePrato + ' alterado com sucesso!').then(() => {
          this.router.navigate(['pratos']);
        })
      })
    } else {
      SweetAlert.exibirErro('Formulário Inválido')
    }
  }

}
