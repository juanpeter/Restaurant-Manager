import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginal-inicial',
  templateUrl: './paginal-inicial.component.html',
  styleUrls: ['./paginal-inicial.component.css']
})
export class PaginalInicialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mudarRota(rota: string): void {
    this.router.navigate([rota])
  }

}
