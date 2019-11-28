import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mission', pathMatch: 'full' },
  { path: 'mission', loadChildren: () => import('./mission/mission.module').then( m => m.MissionPageModule)},
  {
    path: 'challenge',
    loadChildren: () => import('./pages/challenge/challenge.module').then( m => m.ChallengePageModule)
  },
  {
    path: 'create-challenge',
    loadChildren: () => import('./pages/create-challenge/create-challenge.module').then( m => m.CreateChallengePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
