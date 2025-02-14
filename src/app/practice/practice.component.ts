import { Component, OnInit, Input } from "@angular/core";
import { GlobalConstants } from "../constants/app.constants";
import { Router } from "@angular/router";

@Component({
  selector: "app-practice",
  templateUrl: "./practice.component.html",
  standalone: false,
})
export class PracticeComponent implements OnInit {
  topics;
  page;
  breadcrumbs: any;
  constructor(public router: Router) {
    this.page = this.router.url.split("/");
    this.topics = GlobalConstants[this.page[1] + "Topics"];
    this.breadcrumbs = GlobalConstants["breadcrumbs_" + this.page[1]];
  }

  ngOnInit() {}
}
