import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CreatorRoutingModule } from './creator-routing.module';
import { ToastService } from '../common/toast.service';
import { DetailsComponent } from './details/details.component';
import { DinamicComponent } from './dinamic/dinamic.component';


@NgModule({
  declarations: [
    DetailsComponent,
    DinamicComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  providers: [ ToastService ]
})
export class CreatorModule { }
