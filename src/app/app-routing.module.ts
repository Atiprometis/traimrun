import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mission', pathMatch: 'full' },
  { path: 'mission', loadChildren: () => import('./pages/mission/mission.module').then( m => m.MissionPageModule)},
  {
    path: 'challenge',
    loadChildren: () => import('./pages/challenge/challenge.module').then( m => m.ChallengePageModule)
  },
  {
    path: 'create-challenge',
    loadChildren: () => import('./pages/create-challenge/create-challenge.module').then( m => m.CreateChallengePageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tabs/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tabs/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tabs/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'run',
    loadChildren: () => import('./pages/run/run.module').then( m => m.RunPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
