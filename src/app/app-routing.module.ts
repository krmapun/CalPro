import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'calcombinatorial',
    loadChildren: () =>
      import('./calcombinatorial/calcombinatorial.module').then(
        (m) => m.CalcombinatorialPageModule
      )
  },
  {
    path: 'calprobability',
    loadChildren: () =>
      import('./calprobability/calprobability.module').then(
        (m) => m.CalprobabilityPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
