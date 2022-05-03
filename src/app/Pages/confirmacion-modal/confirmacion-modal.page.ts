/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable quote-props */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavParams } from '@ionic/angular';
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
  tarjeta: any;
  recarga: any;
  t: any;
  usuario: any;
  constructor(public modalController: ModalController,
    public navParams: NavParams,
    private http: HttpClient,
    public loadingController: LoadingController,
    public alertController: AlertController,) { }

  ngOnInit() {
   this.tipo = this.navParams.get('tipo');
   this.tarjeta = this.navParams.get('tarjeta');
   this.recarga = this.navParams.get('recarga');
   this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
   this.t = this.recarga.tarjeta;
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

  guardarRecarga(){
    this.presentLoading();
    var total;
    if (this.tipo==0) {
      total = this.recarga.monto;
    } else {
      total = this.recarga.cantidad*20;
    }
    var json = {
      'IdTarjeta': this.tarjeta.idTarjeta,
      'IdUsuario': this.usuario.idUsuario,
      'Balance': this.recarga.monto,
      'Viajes': this.recarga.cantidad,
      'IdSucrursal': 1,
      'TotalVendido': total
    };

    this.http.post("https://smto-apiv2.azurewebsites.net/api/Recargas",json).subscribe((data: any)=>{
      if (data.ok) {
        this.presentModal(this.tipo);
        this.loadingController.dismiss();
      } else {

        this.loadingController.dismiss();
        this.presentAlertUserNotFound();
      }
    });

  }

  async presentModal(tipo) {
    const modal = await this.modalController.create({
      component: ConfirmacionRecargadoModalPage,
      componentProps: {
        'tipo': tipo,
        'recarga':this.recarga,
        'tarjeta':this.tarjeta
      }
    });
    return await modal.present();
  }

  async presentAlertUserNotFound() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Opss..',
      message: 'No se pudo depositar la recarga...',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, espere...',
    });
    await loading.present();
  }

}
