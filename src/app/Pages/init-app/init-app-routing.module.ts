import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitAppPage } from './init-app.page';

const routes: Routes = [
  {
    path: '',
    component: InitAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitAppPageRoutingModule {}
