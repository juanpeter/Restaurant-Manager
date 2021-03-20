import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { PratosComponent } from './core/pratos/pratos.component';
import { PedidosListarComponent } from './core/pedidos/listar/listar.component';
import { HeaderComponent } from './layouts/layouts/header/header.component';
import { ButtonComponent } from './layouts/layouts/button/button.component';
import { CardComponent } from './layouts/layouts/card/card.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PratosComponent,
    PedidosListarComponent,
    ButtonComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
