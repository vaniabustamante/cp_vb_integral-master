import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, 
    public menuCtrl: MenuController,
    public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

  }

  ionViewDidLoad (){
    this.menuCtrl.enable(false, 'authenticated');
    this.menuCtrl.enable(true, 'unauthenticated');
  }


  loginUser(): void {
    if (this.loginForm.valid) {
      this.loading = this.loadingCtrl.create();
      this.loading.present();

      this.firebaseService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then(authData => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(HomePage);
          });
        }, error => {
          this.loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              title: 'Error',
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
    }
  }

  goToSignup(){
    this.navCtrl.push(RegisterPage);
  }

  resetPassword(){
    let prompt = this.alertCtrl.create({
      title: 'Restablecer Contraseña',
      message: 'Ingrese su email',
      inputs: [
        {
          name: 'email',
          placeholder: 'Mi Email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Restablecer',
          handler: data => {
            this.firebaseService.resetPassword(data.email).then(data => {
              console.log('reset: ', data);
              this.showBasicAlert('Success', 'Check your email for further instructions.');
            })
              .catch(err => {
                this.showBasicAlert('Error', err.message);
              })
          }
        }
      ]
    });
    prompt.present();
  }

  showBasicAlert(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
  creditos(){
    this.navCtrl.push('CreditosPage');
  }
}