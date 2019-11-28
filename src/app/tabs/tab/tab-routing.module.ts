import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children:[
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule)
      },
    ]
  },
  {
    path:'',
    redirectTo:'./tabs/tab1/tab1',
    pathMatch:'full'
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
