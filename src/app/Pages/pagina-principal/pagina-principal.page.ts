/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCardModalPage } from '../add-card-modal/add-card-modal.page';
import { InfoCardModalPage } from '../info-card-modal/info-card-modal.page';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {
   check: boolean = true;
   checked: boolean = false;
   select: boolean = false;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InfoCardModalPage,
    });
    return await modal.present();
  }
  async presentModalAddCard() {
    const modal = await this.modalController.create({
      component: AddCardModalPage,
    });
    return await modal.present();
  }

  onChange(event){
    this.checked = event;
    console.log(event);
  }

}
