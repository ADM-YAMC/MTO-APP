/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-confirmacion-recargado-modal',
  templateUrl: './confirmacion-recargado-modal.page.html',
  styleUrls: ['./confirmacion-recargado-modal.page.scss'],
})
export class ConfirmacionRecargadoModalPage implements OnInit {

  tipo: number;
  tipoRecarga: string;
  montoCantidad: string;
  constructor(public modalController: ModalController,public navParams: NavParams) { }

  ngOnInit() {
   this.tipo = this.navParams.get('tipo');
   if (this.tipo == 0) {
    this.montoCantidad = 'Monto';
  }else{
    this.montoCantidad ='Cantidad';
  }
}
  dismiss() {
    this.modalController.dismiss('cancel');
  }

}
