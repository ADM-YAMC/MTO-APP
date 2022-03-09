/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuariosRecargasPage } from '../usuarios-recargas/usuarios-recargas.page';

@Component({
  selector: 'app-info-card-modal',
  templateUrl: './info-card-modal.page.html',
  styleUrls: ['./info-card-modal.page.scss'],
})
export class InfoCardModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async presentModal(tipo) {
    const modal = await this.modalController.create({
      component: UsuariosRecargasPage,
      componentProps: {
        'tipo': tipo,
      }
    });
    return await modal.present();
  }

}
