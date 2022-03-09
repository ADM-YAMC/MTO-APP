/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ConfirmacionRecargadoModalPage } from '../confirmacion-recargado-modal/confirmacion-recargado-modal.page';

@Component({
  selector: 'app-confirmacion-modal',
  templateUrl: './confirmacion-modal.page.html',
  styleUrls: ['./confirmacion-modal.page.scss'],
})
export class ConfirmacionModalPage implements OnInit {
  tipo: number;
  tipoRecarga: string;
  montoCantidad: string;
  constructor(public modalController: ModalController,public navParams: NavParams) { }

  ngOnInit() {
   this.tipo = this.navParams.get('tipo');
   if (this.tipo == 0) {
    this.tipoRecarga = 'Confirmar monto recarga';
    this.montoCantidad = 'Monto';
  }else{
    this.tipoRecarga= 'Confirmar cantidad de viajes';
    this.montoCantidad ='Cantidad';
  }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentModal(tipo) {
    const modal = await this.modalController.create({
      component: ConfirmacionRecargadoModalPage,
      componentProps: {
        'tipo': tipo,
      }
    });
    return await modal.present();
  }

}
