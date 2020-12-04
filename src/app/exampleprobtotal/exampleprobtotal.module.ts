import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleprobtotalPageRoutingModule } from './exampleprobtotal-routing.module';

import { ExampleprobtotalPage } from './exampleprobtotal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleprobtotalPageRoutingModule
  ],
  declarations: [ExampleprobtotalPage]
})
export class ExampleprobtotalPageModule {}
