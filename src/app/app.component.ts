import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/pagina-principal', icon: 'mail' },
    { title: 'Movimientos', url: '/folder/Outbox', icon: 'paper-plane'},
    { title: 'Ayuda', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Salir', url: 'login', icon: 'archive' }
  ];
  constructor() {}

  suma(){
    console.log('d');
  }
}
