/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'init-app',
    loadChildren: () => import('./Pages/init-app/init-app.module').then( m => m.InitAppPageModule)
  },
  {
    path: 'pagina-principal',
    loadChildren: () => import('./Pages/pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  },
  {
    path: 'info-card-modal',
    loadChildren: () => import('./Pages/info-card-modal/info-card-modal.module').then( m => m.InfoCardModalPageModule)
  },
  {
    path: 'usuarios-recargas',
    loadChildren: () => import('./Pages/usuarios-recargas/usuarios-recargas.module').then( m => m.UsuariosRecargasPageModule)
  },
  {
    path: 'confirmacion-modal',
    loadChildren: () => import('./Pages/confirmacion-modal/confirmacion-modal.module').then( m => m.ConfirmacionModalPageModule)
  },
  {
    path: 'confirmacion-recargado-modal',
    loadChildren: () => import('./Pages/confirmacion-recargado-modal/confirmacion-recargado-modal.module').then( m => m.ConfirmacionRecargadoModalPageModule)
  },
  {
    path: 'add-card-modal',
    loadChildren: () => import('./Pages/add-card-modal/add-card-modal.module').then( m => m.AddCardModalPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./Pages/add-card/add-card.module').then( m => m.AddCardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
