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
    // Talvez tirar?
    this.emitirDados.emit('Valor Emitido');
  }

  obterClasseBotao(): string {
    switch(this.buttonType) {
      case 'primary':
        return 'btn btn-primary m-2';
      case 'secondary':
        return 'btn btn-secondary m-2';
      case 'alter':
        return 'btn btn-warning m-2';
      case 'delete':
        return 'btn btn-danger m-2';
      default:
        return 'btn btn-primary m-2';
    }
  }

  obterIconeBotao(): string {
    switch(this.buttonType) {
      case 'primary':
        return 'fa fa-check';
      case 'secondary':
        return 'fa fa-angle-left';
      case 'alter':
        return 'fa fa-cog';
      case 'delete':
        return 'fa fa-times';
      default:
        return 'fa fa-check';
    }
  }

}
