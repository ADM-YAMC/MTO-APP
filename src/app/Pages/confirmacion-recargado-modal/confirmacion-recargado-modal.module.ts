import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionRecargadoModalPageRoutingModule } from './confirmacion-recargado-modal-routing.module';

import { ConfirmacionRecargadoModalPage } from './confirmacion-recargado-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionRecargadoModalPageRoutingModule
  ],
  declarations: [ConfirmacionRecargadoModalPage]
})
export class ConfirmacionRecargadoModalPageModule {}
