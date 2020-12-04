import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalteoremabayesPage } from './calteoremabayes.page';

const routes: Routes = [
  {
    path: '',
    component: CalteoremabayesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalteoremabayesPageRoutingModule {}
