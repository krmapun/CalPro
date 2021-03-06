import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-calprobability",
  templateUrl: "./calprobability.page.html",
  styleUrls: ["./calprobability.page.scss"],
})
export class CalprobabilityPage implements OnInit {
  
  todo = { a: null, b: null };
  response: string;

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

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
    let numberA = parseFloat(this.todo.a);
    let numberB = parseFloat(this.todo.b);
    if (numberA && numberB) {

       let value = (numberA / numberB)*100;
       this.response = value.toFixed(2)+'%'
    } else {
      this.presentAlert(
        "Datos Vacios",
        "",
        "Por favor ingrese datos validos en A y B"
      );
    }
  }
}
