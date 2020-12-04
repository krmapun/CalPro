import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleprobtotalPage } from './exampleprobtotal.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleprobtotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleprobtotalPageRoutingModule {}
