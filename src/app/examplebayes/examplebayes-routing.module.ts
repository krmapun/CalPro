import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplebayesPage } from './examplebayes.page';

const routes: Routes = [
  {
    path: '',
    component: ExamplebayesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplebayesPageRoutingModule {}
