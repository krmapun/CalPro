import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calcombinatorial',
  templateUrl: './calcombinatorial.page.html',
  styleUrls: ['./calcombinatorial.page.scss']
})
export class CalcombinatorialPage implements OnInit {
  order: string;
  useall: string;
  repetition: string;
  image: string;
  formula: string;
  response: string;
  onlyn: boolean;
  todo = { m: null, n: null };

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  orderChanged(ev: any) {
    this.order = ev.detail.value;
    this.showequation();
  }
  useallChanged(ev: any) {
    this.useall = ev.detail.value;
    this.showequation();
  }
  repetitionChanged(ev: any) {
    this.repetition = ev.detail.value;
    this.showequation();
  }
  limpiarlawea(){
    window.location.reload()
  }
  showequation() {
    this.onlyn = true;
    if ((this.order && this.repetition) || this.useall) {
      switch (this.order) {
        case 'orderimportant': {
          // Si importa el orden
          switch (this.useall) {
            case 'useall': {
              // Si usamos todos;
              switch (this.repetition) {
                // Si repiten;
                case 'repeating': {
                  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Duda!
                  this.image = 'P2-min.png';
                  this.formula = 'permutacion con repetición';
                  break;
                }
                // No repiten;
                case 'notrepeating': {
                  this.formula = 'permutacion de "n"';
                  this.onlyn = false;
                  this.image = 'P-min.png';
                  break;
                }
              }
              break;
            }
            case 'notuseall': {
              // No usamos todos;
              switch (this.repetition) {
                // Se repiten;
                case 'repeating': {
                  this.image = 'V2-min.png';
                  this.formula = 'arreglos con repeticion';
                  break;
                }
                // No repiten;
                case 'notrepeating': {
                  this.image = 'V-min.png';
                  this.formula = 'arreglos comunes';
                  break;
                }
              }
              break;
            }
          }
          break;
        }
        case 'ordernotimportant': {
          // No importa el orden
          switch (this.repetition) {
            // Se repiten
            case 'repeating': {
              this.image = 'C2-min.png';
              this.formula = 'Combinaciones con repetición';
              break;
            }
            // No se repiten
            case 'notrepeating': {
              this.image = 'C-min.png';
              this.formula = 'Combinaciones comunes';
              break;
            }
          }

          break;
        }
      }
    }
  }

  async presentAlert(header, subheader, message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subheader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  factorial(n) {
    let answer = 1;
    if (n === 0 || n === 1) {
      return answer;
    } else {
      for (let i = n; i >= 1; i--) {
        answer = answer * i;
      }
      return answer;
    }
  }

  logForm() {
    let numberM = parseFloat(this.todo.m);
    let numberN = parseFloat(this.todo.n);
    if ((numberN && numberM) || this.onlyn === false) {
      console.log(this.formula);
      switch (this.formula) {
        case 'permutacion con repetición': {
          // Pendiente
          this.presentAlert('Pendiente', '', 'Pendiente');
          break;
        }
        case 'permutacion de "n"': {
          this.response = this.factorial(numberN).toString();
          break;
        }
        case 'arreglos con repeticion': {
          this.response = Math.pow(numberM, numberN).toString();
          break;
        }
        case 'arreglos comunes': {
          let mfactorial = this.factorial(numberM);
          let mminusnfactorial = this.factorial(numberM - numberN);
          this.response = (mfactorial / mminusnfactorial).toString();
          break;
        }
        case 'Combinaciones con repetición': {
          let nm1factorial = this.factorial(numberN + (numberM - 1));
          let nminusnfactorial = this.factorial(numberN - 1);
          let mfactorial = this.factorial(numberM);
          this.response = (
            nm1factorial /
            (mfactorial * nminusnfactorial)
          ).toString();
          break;
        }
        case 'Combinaciones comunes': {
          let mfactorial = this.factorial(numberM);
          let mminusnfactorial = this.factorial(numberM - numberN);
          let nfactorial = this.factorial(numberN);
          this.response = (
            mfactorial /
            (mminusnfactorial * nfactorial)
          ).toString();
          break;
        }
        default: {
          this.response = 'bateria baja';
          break;
        }
      }
    } else {
      this.presentAlert(
        'Datos Vacios',
        '',
        'Por favor ingrese datos validos en m y n'
      );
    }
  }
}
