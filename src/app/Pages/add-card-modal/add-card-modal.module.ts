import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCardModalPageRoutingModule } from './add-card-modal-routing.module';

import { AddCardModalPage } from './add-card-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCardModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddCardModalPage]
})
export class AddCardModalPageModule {}
