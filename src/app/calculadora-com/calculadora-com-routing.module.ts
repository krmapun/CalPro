import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraComPage } from './calculadora-com.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraComPageRoutingModule {}
