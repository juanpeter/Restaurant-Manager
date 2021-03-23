import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { PedidosCadastrarComponent } from './core/pedidos/cadastrar/cadastrar.component';
import { PedidosDetalharComponent } from './core/pedidos/detalhar/detalhar.component';
import { PedidosListarComponent } from './core/pedidos/listar/listar.component';
import { PratosAlterarComponent } from './core/pratos/alterar/alterar.component';
import { PratosCadastrarComponent } from './core/pratos/cadastrar/cadastrar.component';
import { PratosListarComponent } from './core/pratos/listar/listar.component';
import { PaginaNaoEncontradaComponent } from './shared/pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginalInicialComponent } from './shared/pages/paginal-inicial/paginal-inicial.component';

const routes: Routes = [
  {
    path: 'home',
    component: PaginalInicialComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pratos',
    component: PratosListarComponent
  },
  {
    path: 'pratos/cadastrar',
    component: PratosCadastrarComponent
  },
  {
    path: 'pratos/alterar/:id',
    component: PratosAlterarComponent
  },
  {
    path: 'pedidos',
    component: PedidosListarComponent
  },
  {
    path: 'pedidos/cadastrar',
    component: PedidosCadastrarComponent
  },
  {
    path: 'pedidos/detalhar/:id',
    component: PedidosDetalharComponent
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
