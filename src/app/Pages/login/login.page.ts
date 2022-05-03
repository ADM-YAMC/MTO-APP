/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  userLogin: any;
  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    public alertController: AlertController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    sessionStorage.clear();
    this.initLoginForm();
  }


  initLoginForm(){
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  get errorControl() {
    return this.loginForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.loginInit(this.loginForm.value);
    }
  }

  loginInit(user){
    this.presentLoading();
    this.http.post('https://smto-apiv2.azurewebsites.net/api/LoginUser',user).subscribe(data =>{
      this.userLogin = data;
     if (!this.userLogin.ok) {
      this.loadingController.dismiss();
       this.presentAlertUserNotFound(this.userLogin.mensaje);
     }else{
      this.loadingController.dismiss();
       this.router.navigate(['pagina-principal']);
       sessionStorage.setItem('usuario', JSON.stringify(this.userLogin.user[0]));
     }
    });
  }

  async presentAlertUserNotFound(mjs) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Opss..',
      message: mjs,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Comprovando la informacion...',
    });
    await loading.present();
  }
}
