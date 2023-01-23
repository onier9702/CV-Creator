import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { BasicFormComponent } from './basic-form/basic-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dinamic', component: DinamicComponent },
      { path: 'basic', component: BasicFormComponent },
      { path: 'details', component: DetailsComponent },
      { path: '**', redirectTo: 'details' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
