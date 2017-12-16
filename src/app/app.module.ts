import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { LoginPage} from '../pages/login/login';
import { MathJaxDirective } from '../directives/math-jax/math-jax';
import { BernoulliPage } from '../pages/bernoulli/bernoulli';
import { BinomialPage } from '../pages/binomial/binomial';
import { ChiPage } from '../pages/chi/chi';
import { ExponencialPage } from '../pages/exponencial/exponencial';
import { HipergeometricaPage } from '../pages/hipergeometrica/hipergeometrica';
import { NormalPage } from '../pages/normal/normal';
import { PoissonPage } from '../pages/poisson/poisson';
import { TstudentPage } from '../pages/tstudent/tstudent';
import { HomePage } from "../pages/home/home";
import { RegisterPage} from '../pages/register/register';
import { FrecuenciaPage} from '../pages/frecuencia/frecuencia';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from '../providers/firebase-service/firebase-service';


let firebaseConfig = {
  apiKey: "AIzaSyAiG_6lKEeqOQueYe1jEByLm3XF1kpbeww",
  authDomain: "integral-ii-y-iii.firebaseapp.com",
  databaseURL: "https://integral-ii-y-iii.firebaseio.com",
  projectId: "integral-ii-y-iii",
  storageBucket: "",
  messagingSenderId: "1032435476103"
};
 

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    BernoulliPage,
    BinomialPage,
    ChiPage,
    ExponencialPage,
    HipergeometricaPage,
    NormalPage,
    PoissonPage,
    TstudentPage,
    MathJaxDirective,
    FrecuenciaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    BernoulliPage,
    BinomialPage,
    ChiPage,
    ExponencialPage,
    HipergeometricaPage,
    NormalPage,
    PoissonPage,
    TstudentPage,
    FrecuenciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService
    ]
})
export class AppModule {}
