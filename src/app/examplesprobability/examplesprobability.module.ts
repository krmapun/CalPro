import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamplesprobabilityPageRoutingModule } from './examplesprobability-routing.module';

import { ExamplesprobabilityPage } from './examplesprobability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamplesprobabilityPageRoutingModule
  ],
  declarations: [ExamplesprobabilityPage]
})
export class ExamplesprobabilityPageModule {}
