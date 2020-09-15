import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalprobabilityPageRoutingModule } from './calprobability-routing.module';

import { CalprobabilityPage } from './calprobability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalprobabilityPageRoutingModule
  ],
  declarations: [CalprobabilityPage]
})
export class CalprobabilityPageModule {}
