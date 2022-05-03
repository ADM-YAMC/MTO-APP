import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosRecargasPageRoutingModule } from './usuarios-recargas-routing.module';

import { UsuariosRecargasPage } from './usuarios-recargas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosRecargasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsuariosRecargasPage]
})
export class UsuariosRecargasPageModule {}
