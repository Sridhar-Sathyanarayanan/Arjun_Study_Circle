import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  standalone: false,
})
export class CardsComponent implements OnInit {
  constructor() {}

  @Input() items: any;

  ngOnInit() {}
}
