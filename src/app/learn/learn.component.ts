import { Component, OnInit, Input } from "@angular/core";
import { GlobalConstants } from "../constants/app.constants";
import { Router } from "@angular/router";
import mermaid from "mermaid";

@Component({
  selector: "app-learn",
  templateUrl: "./learn.component.html",
  standalone: false,
})
export class LearnComponent implements OnInit {
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
