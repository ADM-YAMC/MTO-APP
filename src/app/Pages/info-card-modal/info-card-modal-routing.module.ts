import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCardModalPage } from './info-card-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCardModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCardModalPageRoutingModule {}
