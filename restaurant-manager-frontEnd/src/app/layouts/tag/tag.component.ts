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
      case 'NOVO': case 'amarelo':
        return 'warning' //amarelo
      case 'CONCLUIDO': case 'verde':
        return 'success' //verde
      case 'CANCELADO': case 'vermelho':
        return 'danger' //vermelho
      case 'FECHADO': case 'azul':
        return 'primary' //azul
      default:
        return 'warning'
    }

  }

}
