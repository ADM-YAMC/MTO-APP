/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ConfirmacionModalPage } from '../confirmacion-modal/confirmacion-modal.page';

@Component({
  selector: 'app-usuarios-recargas',
  templateUrl: './usuarios-recargas.page.html',
  styleUrls: ['./usuarios-recargas.page.scss'],
})
export class UsuariosRecargasPage implements OnInit {

  tipo: number;
  tipoRecarga: string;
  constructor(public modalController: ModalController,public navParams: NavParams) { }

  ngOnInit() {
    this.tipo = this.navParams.get('tipo');
    if (this.tipo == 0) {
      this.tipoRecarga = 'Monto de la recarga';
    }else{
      this.tipoRecarga= 'Cantidad de viajes';
    }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async presentModal(tipo) {
    const modal = await this.modalController.create({
      component: ConfirmacionModalPage,
      componentProps: {
        'tipo': tipo,
      }
    });
    return await modal.present();
  }

}
