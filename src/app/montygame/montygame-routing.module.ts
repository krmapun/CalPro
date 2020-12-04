import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontygamePage } from './montygame.page';

const routes: Routes = [
  {
    path: '',
    component: MontygamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontygamePageRoutingModule {}
