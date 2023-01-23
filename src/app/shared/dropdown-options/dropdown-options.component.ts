import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { DropdownOptions } from '../entities/dropdown-options.class';

@Component({
  selector: 'app-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss']
})
export class DropdownOptionsComponent implements OnInit {

  @Input() a_options!: DropdownOptions[];
  @Input() a_formControlName!: FormControl;
  @Input() a_default?: DropdownOptions;
  @Input() nullable?: boolean = true;        // if nullable, option "-" appear
  @Input() a_placeHolder?: any = 'Select';

  @Output() newValue: EventEmitter<number> = new EventEmitter();

  public setDrop: boolean = false;
  public optionSelected: any;
  public nullOption: DropdownOptions = { label: '-', value: null };

  constructor() { }

  ngOnInit(): void {
    // console.log('this.a_options: ', this.a_options);
    if ( this.a_default !== undefined ) {
      this.selectOption( this.a_default )
    }

    // if ( null )
    
    

  }

  openDropdown() {
    this.setDrop = !this.setDrop;
  }

  setNullOpt() {
    this.setDrop = false;
    this.optionSelected = this.nullOption;
    this.a_placeHolder = ' ';
    this.emitValue( this.nullOption );
  }

  selectOption( opt: DropdownOptions ) {
    this.optionSelected = opt;
    this.setDrop = false;
    this.a_placeHolder = opt.label;
    this.emitValue( opt );
  }

  emitValue( opt: DropdownOptions ) {
    this.newValue.emit( opt.value );
  }

}
