import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalprobabilityPage } from './calprobability.page';

const routes: Routes = [
  {
    path: '',
    component: CalprobabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalprobabilityPageRoutingModule {}
