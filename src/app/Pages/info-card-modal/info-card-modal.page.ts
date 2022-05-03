/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UsuariosRecargasPage } from '../usuarios-recargas/usuarios-recargas.page';

@Component({
  selector: 'app-info-card-modal',
  templateUrl: './info-card-modal.page.html',
  styleUrls: ['./info-card-modal.page.scss'],
})
export class InfoCardModalPage implements OnInit {
  cards: any;
  constructor(public modalController: ModalController,public navParams: NavParams) { }

  ngOnInit() {
    this.cards = this.navParams.get('cards');
    console.log(this.cards);
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
        'card':this.cards
      }
    });
    return await modal.present();
  }

}
