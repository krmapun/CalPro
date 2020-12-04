import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcuprototalPageRoutingModule } from './calcuprototal-routing.module';

import { CalcuprototalPage } from './calcuprototal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcuprototalPageRoutingModule
  ],
  declarations: [CalcuprototalPage]
})
export class CalcuprototalPageModule {}
