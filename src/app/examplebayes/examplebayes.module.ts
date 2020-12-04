import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamplebayesPageRoutingModule } from './examplebayes-routing.module';

import { ExamplebayesPage } from './examplebayes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamplebayesPageRoutingModule
  ],
  declarations: [ExamplebayesPage]
})
export class ExamplebayesPageModule {}
