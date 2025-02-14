import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  constructor() { }

  @Input() choices: any;
  @Input() control: any;
  @Input() parentForm: FormGroup;
  @Output() radioChange = new EventEmitter();

  ngOnInit() {
    console.log("sdfs", this.control);
   }

  changeRadioValue(data){
    
    this.radioChange.emit(data);
  }
}

