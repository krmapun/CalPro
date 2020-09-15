import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraComPageRoutingModule } from './calculadora-com-routing.module';

import { CalculadoraComPage } from './calculadora-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraComPageRoutingModule
  ],
  declarations: [CalculadoraComPage]
})
export class CalculadoraComPageModule {}
