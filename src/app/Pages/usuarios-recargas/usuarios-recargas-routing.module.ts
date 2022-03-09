import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosRecargasPage } from './usuarios-recargas.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosRecargasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRecargasPageRoutingModule {}
