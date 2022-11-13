import { Injectable } from '@angular/core';
import {Message} from 'primeng//api';

import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(msg: string) {
    this.messageService.add({severity:'success', summary:msg , detail: msg});
  }
  showError(msg: string) {
    this.messageService.add({severity:'error', summary:'', detail: msg});
  }
  showInfo(msg: string) {
    this.messageService.add({severity:'info', summary:'', detail: msg});
  }
  showWarning(msg: string) {
    this.messageService.add({severity:'warn', summary:'', detail: msg});
  }

  addMultiple() {
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
                    {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
  }

  clear() {
    this.messageService.clear();
  }

}
