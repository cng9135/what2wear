import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetUpPage } from './set-up.page';

const routes: Routes = [
  {
    path: 'SetUp',
    component: SetUpPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/SetUp',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/SetUp',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SetUpPageRoutingModule {}
