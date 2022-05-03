/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-var */
/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { ConfirmacionModalPage } from '../confirmacion-modal/confirmacion-modal.page';

@Component({
  selector: 'app-usuarios-recargas',
  templateUrl: './usuarios-recargas.page.html',
  styleUrls: ['./usuarios-recargas.page.scss'],
})
export class UsuariosRecargasPage implements OnInit {
  tipo: number;
  isSubmitted = false;
  recargaCardForm: FormGroup;
  tipoRecarga: string;
  tarjeta: any;
  constructor(public modalController: ModalController,public navParams: NavParams, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tipo = this.navParams.get('tipo');
    this.tarjeta = this.navParams.get('card');
    if (this.tipo == 0) {
      this.tipoRecarga = 'Monto de la recarga';
    }else{
      this.tipoRecarga= 'Cantidad de viajes';
    }
    this.initRecargaCardForm();
  }
  initRecargaCardForm(){
    this.recargaCardForm = this.formBuilder.group({
      monto: [0, [Validators.required, Validators.maxLength(3)]],
      cantidad: [0, [Validators.required, Validators.maxLength(2)]],
      tarjeta:['', [Validators.required]],
      fecha:['', [Validators.required]],
      cvv:['', [Validators.required]],
    });
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.recargaCardForm.valid) {
      console.log(this.recargaCardForm.value);
      return false;
    } else {
      this.presentModal(this.tipo, this.tarjeta, this.recargaCardForm.value);
    }
  }

  inputDate(expdate){
    console.log(expdate);
   var expDateFormatter = expdate.replace(/\//g, "").substring(0, 2) +
  (expdate.length > 2 ? '/' : '') +
  expdate.replace(/\//g, "").substring(2, 4);
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async presentModal(tipo, tarjeta,recarga) {

    const modal = await this.modalController.create({
      component: ConfirmacionModalPage,
      componentProps: {
        'tipo': tipo,
        'tarjeta': tarjeta,
        'recarga':recarga
      }
    });
    return await modal.present();
  }
  get errorControl() {
    return this.recargaCardForm.controls;
  }
}
