/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.page.html',
  styleUrls: ['./add-card-modal.page.scss'],
})
export class AddCardModalPage implements OnInit {

  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
