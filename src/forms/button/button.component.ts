import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() route: any;
  @Input() buttonLabel: any;
  @Input() class: any;
  @Input() buttonClass: any;
  @Output() clickEvent = new EventEmitter();

  ngOnInit() { }

  click(event){
    this.clickEvent.emit(event);
  }
}

