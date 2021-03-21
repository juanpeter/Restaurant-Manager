import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PratoRestaurante } from 'src/app/shared/models/pratoRestaurante';
import { PratosRestauranteService } from 'src/app/shared/services/pratosRestaurante.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'pratos-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class PratosListarComponent implements OnInit {

  public listaDePratos: Array<PratoRestaurante> = new Array<PratoRestaurante>();

  constructor(
    private pratosRestauranteService: PratosRestauranteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pratosRestauranteService.buscar().subscribe((pratos: Array<PratoRestaurante>) => {
      this.listaDePratos = pratos;
    })
  }

  editarPrato(id: any) {
    this.router.navigate([`pratos/alterar/${id}`])
  }

  deletarPrato(id: any) {
    this.pratosRestauranteService.deletar(id).subscribe(() => {
      SweetAlert.exibirSucesso('Prato excluído com sucesso').then(() => {
        this.pratosRestauranteService.buscar().subscribe((pratos: Array<PratoRestaurante>) => {
          this.listaDePratos = pratos;
        })
      })
    })
  }

}
