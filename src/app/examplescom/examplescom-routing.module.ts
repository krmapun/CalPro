import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplescomPage } from './examplescom.page';

const routes: Routes = [
  {
    path: '',
    component: ExamplescomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplescomPageRoutingModule {}
