import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'creator',
    loadChildren: () => import('./creator/creator.module').then( m => m.CreatorModule ) 
  },
  // {
  //   path: 'test1',
  //   loadChildren: () => import('./common/common.module').then( m => m.CommonsModule ) 
  // },
  {
    path: 'admin',
    loadChildren: () => import('./administration/administration.module').then( m => m.AdministrationModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
