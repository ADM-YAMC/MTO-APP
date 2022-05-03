  /* eslint-disable no-trailing-spaces */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  addCardForm: FormGroup;
  isSubmitted = false;
  card: any;
  cardTemp: any;
  mensaje: any;
  usuario: any;
  constructor( public modalController: ModalController,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private reloadCardUser: PaginaPrincipalPage,
    private router: Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.initAddCardForm();
  }

  initAddCardForm(){
    this.addCardForm = this.formBuilder.group({
      card: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.addCardForm.valid) {
      return false;
    } else {
      this.updateCardAddUser();
    }
  }
  onInputcard(card){
    this.card = card.value;
   if (this.card.length == 9) {
    this.http.get("https://localhost:44391/api/Tarjetas/asociar/"+this.card+"").subscribe(data =>{
      this.cardTemp = data;
      this.mensaje =  this.cardTemp.mensaje;
    });
   }else{
     this.mensaje = "";
   }
  }
  updateCardAddUser(){
    if (this.cardTemp.ok) {
      this.cardTemp.tarjeta.map(x => x.idUsuarioTitular=this.usuario.idUsuario);
     }
     var card = this.cardTemp.tarjeta[0];
     this.http.put("https://smto-apiv2.azurewebsites.net/api/Tarjetas/"+this.cardTemp.tarjeta[0].idTarjeta+"",card).subscribe(data =>{
       this.cardTemp = data;
       if (this.cardTemp.ok) {
         this.presentAlertUpdateCard(this.cardTemp.mensaje);
       }
     });
  }

  async presentAlertUpdateCard(mjs) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito!!!',
      message: mjs,
      buttons:[
         {
          text: 'Ok',
          id: 'confirm-button',
          handler: () => {
            window.location.reload();
          }
        }
      ]
    });
    await alert.present();
  }
  get errorControl() {
    return this.addCardForm.controls;
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  reloadComponent() {
    this.router.navigateByUrl('pagina-principal');

}
}



