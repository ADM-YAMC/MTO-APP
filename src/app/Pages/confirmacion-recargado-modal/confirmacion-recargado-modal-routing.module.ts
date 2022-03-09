import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionRecargadoModalPage } from './confirmacion-recargado-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionRecargadoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionRecargadoModalPageRoutingModule {}
