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
  },
  {
    path: 'examplescom',
    loadChildren: () => import('./examplescom/examplescom.module').then( m => m.ExamplescomPageModule)
  },
  {
    path: 'examplesprobability',
    loadChildren: () => import('./examplesprobability/examplesprobability.module').then( m => m.ExamplesprobabilityPageModule)
  },
  {
    path: 'calteoremabayes',
    loadChildren: () => import('./calteoremabayes/calteoremabayes.module').then( m => m.CalteoremabayesPageModule)
  },
  {
    path: 'examplebayes',
    loadChildren: () => import('./examplebayes/examplebayes.module').then( m => m.ExamplebayesPageModule)
  },
  {
    path: 'exampleprobtotal',
    loadChildren: () => import('./exampleprobtotal/exampleprobtotal.module').then( m => m.ExampleprobtotalPageModule)
  },
  {
    path: 'calcuprototal',
    loadChildren: () => import('./calcuprototal/calcuprototal.module').then( m => m.CalcuprototalPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
