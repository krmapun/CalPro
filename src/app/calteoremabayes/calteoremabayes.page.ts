import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-calteoremabayes',
  templateUrl: './calteoremabayes.page.html',
  styleUrls: ['./calteoremabayes.page.scss'],
})
export class CalteoremabayesPage implements OnInit {

    
  todo = { pa: null, pb: null, pba: null };
  response: string;
  tabla = {  }

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  limpiarlawea() {
    window.location.reload();
  }

  
  async presentAlert(header, subheader, message) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: header,
      subHeader: subheader,
      message: message,
      buttons: ["OK"],
    });

    await alert.present();
  }

  logForm() {
    let numberA = parseFloat(this.todo.pa);
    let numberB = parseFloat(this.todo.pb);
    let numberBA = parseFloat(this.todo.pba);
    if (numberA && numberB && numberBA) {

       let nomi = numberBA*numberA;

       let value = (nomi / numberB)*100;
       this.response = value.toFixed(2)+'%'
    } else {
      this.presentAlert(
        "Datos Vacios",
        "",
        "Por favor ingrese datos validos en P=(A) y P=(A) , P=(B/A)"
      );
    }
  }


}
