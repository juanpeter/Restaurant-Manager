import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosListarComponent } from './core/pedidos/listar/listar.component';
import { PratosAlterarComponent } from './core/pratos/alterar/alterar.component';
import { PratosListarComponent } from './core/pratos/listar/listar.component';

const routes: Routes = [
  {
    path: 'pedidos',
    component: PedidosListarComponent
  },
  {
    path: 'pratos',
    component: PratosListarComponent
  },
  {
    path: 'pratos/alterar/:id',
    component: PratosAlterarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
