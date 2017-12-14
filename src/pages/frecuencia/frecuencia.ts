import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import * as stat from "simple-statistics";
import * as math from "mathjs";



@Component({
  selector: 'page-frecuencia',
  templateUrl: 'frecuencia.html'
})
export class FrecuenciaPage {
  public prueba;
  public frecuencia;
  public num : number;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public visible: Boolean;
  public buttonDisabled = false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      dat: ['', Validators.compose([Validators.required])]
    });

    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    this.def_text="<p>Cuando los valores de la variable son muchos, conviene agrupar los datos en intervalos o clases para así realizar un mejor análisis e interpretación de ellos. </p>";
    this.par_text = "$n$: Representa la cantidad total de datos que se deben ingresar";
    this.par_text = "$r$: Representa el rango";
    this.par_text = "$l_i$: Representa el limite inferior";
    this.par_text = "$l_s$: Representa el limite superior";
    this.par_text = "$a$: Representa la amplitud";


  }
 tabla(){
  var p = Number(this.prueba.value.dat);
  if(p>0){
    p+1; 
    var suma: Array<Number> = [];
    if( p<0){
      this.visible = true;
      this.res_text = "no";
      this.buttonDisabled = true;
    }else{
      this.visible = false;
      let alert = this.alertCtrl.create({
        title: "Error de Cálculo",
        message: 'Revise los parámetros',
        buttons: ['OK']
      });
      alert.present();
    }
  }else{
    this.visible = false;
    let alert = this.alertCtrl.create({
      title: "Error de Cálculo",
      message: 'Debe ingresar un valor entre `0` y `1` inclusive',
      buttons: ['OK']
    });
    alert.present();
  }


}
  reset(){
    this.prueba.reset();
    this.buttonDisabled = false;
    this.visible = false;
    this.res_text = null;
  }  
  
    }
