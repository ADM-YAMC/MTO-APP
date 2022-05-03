/* eslint-disable eqeqeq */
/* eslint-disable quote-props */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
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
   tarjetas: any;
   cards: any[];
  constructor(public modalController: ModalController,public loadingController: LoadingController, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
   var user = JSON.parse(sessionStorage.getItem('usuario'));
   this.loadCardUser(user.idUsuario);
  }

  loadCardUser(id){
   this.http.get("https://smto-apiv2.azurewebsites.net/api/Tarjetas/usuario/"+id+"").subscribe((data: any) =>{
    this.tarjetas = data.tarjeta;
     console.log(this.tarjetas);
     });
  }

  async presentModal(card) {
    const modal = await this.modalController.create({
      component: InfoCardModalPage,
      componentProps: {
       'cards': card
      }
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

  reloadComponent() {
    var currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}
