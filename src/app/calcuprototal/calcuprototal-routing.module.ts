import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcuprototalPage } from './calcuprototal.page';

const routes: Routes = [
  {
    path: '',
    component: CalcuprototalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcuprototalPageRoutingModule {}
