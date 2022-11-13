import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LeftSideNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ], 
  exports: [
    LeftSideNavComponent
  ]
})
export class SharedModule { }
