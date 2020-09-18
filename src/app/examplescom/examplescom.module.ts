import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamplescomPageRoutingModule } from './examplescom-routing.module';

import { ExamplescomPage } from './examplescom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamplescomPageRoutingModule
  ],
  declarations: [ExamplescomPage]
})
export class ExamplescomPageModule {}
