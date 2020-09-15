import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcombinatorialPageRoutingModule } from './calcombinatorial-routing.module';

import { CalcombinatorialPage } from './calcombinatorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcombinatorialPageRoutingModule
  ],
  declarations: [CalcombinatorialPage]
})
export class CalcombinatorialPageModule {}
