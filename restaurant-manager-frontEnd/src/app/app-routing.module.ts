import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosListarComponent } from './core/pedidos/listar/listar.component';
import { PratosComponent } from './core/pratos/pratos.component';

const routes: Routes = [
  {
    path: 'pedidos',
    component: PedidosListarComponent
  },
  {
    path: 'pratos',
    component: PratosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
