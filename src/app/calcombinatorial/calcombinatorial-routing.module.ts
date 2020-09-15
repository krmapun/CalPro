import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcombinatorialPage } from './calcombinatorial.page';

const routes: Routes = [
  {
    path: '',
    component: CalcombinatorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcombinatorialPageRoutingModule {}
