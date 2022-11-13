import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { HomeComponent, AboutComponent, ContactComponent, FrecuentQuestionsComponent } from './pages';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    FrecuentQuestionsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
