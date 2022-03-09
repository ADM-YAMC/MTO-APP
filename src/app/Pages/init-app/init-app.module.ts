import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitAppPageRoutingModule } from './init-app-routing.module';

import { InitAppPage } from './init-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitAppPageRoutingModule
  ],
  declarations: [InitAppPage]
})
export class InitAppPageModule {}
