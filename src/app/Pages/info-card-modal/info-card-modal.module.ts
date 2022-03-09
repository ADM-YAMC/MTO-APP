import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCardModalPageRoutingModule } from './info-card-modal-routing.module';

import { InfoCardModalPage } from './info-card-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCardModalPageRoutingModule
  ],
  declarations: [InfoCardModalPage]
})
export class InfoCardModalPageModule {}
