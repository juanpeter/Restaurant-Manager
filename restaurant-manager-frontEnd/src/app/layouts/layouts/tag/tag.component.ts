import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() tagValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  obterValorTag(): String {

    switch(this.tagValue) {
      case 'NOVO':
        return 'warning' //amarelo
      case 'CONCLUIDO':
        return 'success' //verde
      case 'CANCELADO':
        return 'danger' //vermelho
      case 'FECHADO':
        return 'primary' //azul
      default:
        return 'warning'
    }

  }

}
