import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { MessageService } from 'primeng/api';
import {Message} from 'primeng//api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  // providers: [ MessageService ]
})
export class TestComponent implements OnInit {

  constructor(private toastService: ToastService, private  msgService: MessageService) { }

  ngOnInit(): void {
    this.msgService.add({
      severity: 'success',
      summary: 'Test',
      detail: 'Via Test'

    })
  }

  showMsg() {
    console.log('Testing');
    
    this.toastService.showSuccess( 'Success Test' );
    // this.msgService.add({
    //   severity:'success', 
    //   summary:'Service Message', 
    //   detail:'Via MessageService'
    // });
  }

}
