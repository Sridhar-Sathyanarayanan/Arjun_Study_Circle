import { Component, OnInit, DoCheck } from "@angular/core";
import { GlobalConstants } from "./constants/app.constants";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: false,
})
export class AppComponent implements OnInit, DoCheck {
  menu: any;
  languages: any;
  langSelect: any;
  constructor() {}
  ngOnInit() {
    this.langSelect = new FormControl("en");
    this.menu = GlobalConstants.menu;
    this.languages = GlobalConstants.languages;
  }

  ngDoCheck() {
    console.log();
  }
}
