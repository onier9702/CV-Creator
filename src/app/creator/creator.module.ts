import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';



import { CreatorRoutingModule } from './creator-routing.module';
import { ToastService } from '../common/toast.service';
import { DetailsComponent } from './details/details.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { SharedModule } from '../shared/shared.module';
// import { ConfirmModalComponent } from '../shared/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    DetailsComponent,
    DinamicComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    SharedModule,
  ],
  providers: [ 
    ToastService,
    // ConfirmModalComponent
  ]
})
export class CreatorModule { }
