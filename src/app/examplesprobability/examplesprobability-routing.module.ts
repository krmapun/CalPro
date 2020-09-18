import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplesprobabilityPage } from './examplesprobability.page';

const routes: Routes = [
  {
    path: '',
    component: ExamplesprobabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesprobabilityPageRoutingModule {}
