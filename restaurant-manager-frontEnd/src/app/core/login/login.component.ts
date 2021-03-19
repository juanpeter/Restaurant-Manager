import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formulario: FormBuilder;

  // constructor(private ) { }

  ngOnInit(): void {
    // this.formulario = this.formBuilder.group({
    //   login: [null, Validators.required],
    //   senha: [null, Validators.required]
    // })
  }

  // realizarLogin() {
  //   if (this.formulario.valid) {

  //   }
  // }

}
