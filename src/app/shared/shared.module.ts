import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MatDialogModule } from '@angular/material/dialog';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { DropdownOptionsComponent } from './dropdown-options/dropdown-options.component';
import { ButtonSelectComponent } from './button-select/button-select.component';


@NgModule({
  declarations: [
    LeftSideNavComponent,
    ConfirmModalComponent,
    DropdownOptionsComponent,
    ButtonSelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ], 
  exports: [
    MatDialogModule,
    LeftSideNavComponent,
    DropdownOptionsComponent,
    ButtonSelectComponent
  ],
  providers: [
    ConfirmModalComponent
  ]
})
export class SharedModule { }
