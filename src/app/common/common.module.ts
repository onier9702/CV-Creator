import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
// import { MessageModule } from 'primeng/message';
import { ToastService } from './toast.service';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    CommonRoutingModule,
  ],
  // exports: [ ToastService  ],
  providers: [ MessageService ]
})
export class CommonsModule {

  static forRoot(): ModuleWithProviders<CommonsModule> {

    return {
      ngModule: CommonsModule,

      providers: [
        MessageService,
        ToastService
      ]


    }

  }

}
