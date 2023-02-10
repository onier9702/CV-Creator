import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DropdownOptions } from '../entities/dropdown-options.class';

@Component({
  selector: 'app-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.scss']
})
export class ButtonSelectComponent implements OnInit {

  @Input() a_options!: DropdownOptions<any>[];
  @Input() a_formControlName!: FormControl;
  // @Input() a_default?: DropdownOptions;
  @Input() nullable?: boolean = true;        // if nullable, option "-" appear
  @Input() a_placeHolder?: any = 'Select';

  @Output() newValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  selectOption( opt: DropdownOptions<any>, i: number ) {
    this.changeColorOption(i);
    this.emitValue(opt);
  }

  emitValue( opt: DropdownOptions<any> ) {
    this.newValue.emit( opt.value );
  }

  changeColorOption(i: number) {
    for (let x = 0; x < this.a_options.length; x++) {
      const elemRef = document.getElementById(x.toString());
      ( i === x )
        ? elemRef?.classList.add('setColor')
        : elemRef?.classList.remove('setColor');
      
    }

  }

}
