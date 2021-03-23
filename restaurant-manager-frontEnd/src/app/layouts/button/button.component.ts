import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonType: string;

  @Output() emitirDados = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  click() {
  }

  obterClasseBotao(): string {
    switch(this.buttonType) {
      case 'primary': case 'azul':
        return 'btn btn-primary m-2';
      case 'secondary': case 'cinza':
        return 'btn btn-secondary m-2';
      case 'alter': case 'amarelo':
        return 'btn btn-warning m-2';
      case 'delete': case 'vermelho':
        return 'btn btn-danger m-2';
      case 'success': case 'verde':
        return 'btn btn-success m-2';
      default:
        return 'btn btn-primary m-2';
    }
  }

  obterIconeBotao(): string {
    switch(this.buttonType) {
      case 'primary': case 'azul': case 'success': case 'verde':
        return 'fa fa-check';
      case 'secondary': case 'cinza':
        return 'fa fa-angle-left';
      case 'alter': case 'amarelo':
        return 'fa fa-cog';
      case 'delete': case 'vermelho':
        return 'fa fa-times';
      default:
        return 'fa fa-check';
    }
  }

}
