import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontygamePageRoutingModule } from './montygame-routing.module';

import { MontygamePage } from './montygame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontygamePageRoutingModule
  ],
  declarations: [MontygamePage]
})
export class MontygamePageModule {}
