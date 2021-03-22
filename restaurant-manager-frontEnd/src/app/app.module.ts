import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { PedidosListarComponent } from './core/pedidos/listar/listar.component';
import { HeaderComponent } from './layouts/layouts/header/header.component';
import { ButtonComponent } from './layouts/layouts/button/button.component';
import { CardComponent } from './layouts/layouts/card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { PratosListarComponent } from './core/pratos/listar/listar.component';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';
import { PratosAlterarComponent } from './core/pratos/alterar/alterar.component';
import { PratosCadastrarComponent } from './core/pratos/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PedidosListarComponent,
    ButtonComponent,
    HeaderComponent,
    CardComponent,
    PratosListarComponent,
    PratosAlterarComponent,
    PratosCadastrarComponent
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
