import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ListboxModule } from 'primeng/listbox';
import { InputSwitchModule } from 'primeng/inputswitch';

import { TagComponent } from './layouts/tag/tag.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ButtonComponent } from './layouts/button/button.component';
import { CardComponent } from './layouts/card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { PedidosListarComponent } from './core/pedidos/listar/listar.component';
import { PratosListarComponent } from './core/pratos/listar/listar.component';
import { PratosAlterarComponent } from './core/pratos/alterar/alterar.component';
import { PratosCadastrarComponent } from './core/pratos/cadastrar/cadastrar.component';
import { PedidosCadastrarComponent } from './core/pedidos/cadastrar/cadastrar.component';
import { PedidosDetalharComponent } from './core/pedidos/detalhar/detalhar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    HeaderComponent,
    CardComponent,
    TagComponent,
    PedidosListarComponent,
    PedidosCadastrarComponent,
    PratosListarComponent,
    PratosAlterarComponent,
    PratosCadastrarComponent,
    PedidosDetalharComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    TagModule,
    ListboxModule,
    InputSwitchModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
