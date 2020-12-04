import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcuprototal',
  templateUrl: './calcuprototal.page.html',
  styleUrls: ['./calcuprototal.page.scss'],
})
export class CalcuprototalPage implements OnInit {

  todo = { a: null, b: null };
  response: string;

  constructor() { }

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

  AgregarValor1(){

    alert('asdlkjasdj')
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
