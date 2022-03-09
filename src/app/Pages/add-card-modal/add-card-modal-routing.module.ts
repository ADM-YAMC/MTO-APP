import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCardModalPage } from './add-card-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddCardModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCardModalPageRoutingModule {}
