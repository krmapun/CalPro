import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalteoremabayesPageRoutingModule } from './calteoremabayes-routing.module';

import { CalteoremabayesPage } from './calteoremabayes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalteoremabayesPageRoutingModule
  ],
  declarations: [CalteoremabayesPage]
})
export class CalteoremabayesPageModule {}
