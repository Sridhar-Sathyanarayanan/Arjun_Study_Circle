import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  standalone: false,
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() route: any;
  @Input() buttonLabel: any;
  @Input() class: any;
  @Input() disabled: any = false;
  @Output() clickEvent = new EventEmitter();

  ngOnInit() {}

  onClick(event) {
    this.clickEvent.emit(event);
  }
}
