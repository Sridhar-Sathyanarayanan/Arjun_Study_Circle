import { Component, OnInit } from "@angular/core";
import { GlobalConstants } from "../../constants/app.constants";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-upcoming-exams",
  templateUrl: "./upcoming-exams.component.html",
  standalone: false,
})
export class UpcomingExamsComponent implements OnInit {
  topics;
  page;
  breadcrumbs: any;
  practiceForm: any;
  dataSource: any = [];
  columnsToDisplay: any;
  headers: any;

  constructor(public router: Router, private _sanitizer: DomSanitizer) {
    this.page = this.router.url.split("/");
    this.topics = GlobalConstants[this.page[1] + "Topics"];
    this.breadcrumbs = GlobalConstants["breadcrumbs_" + this.page[1]];
  }

  ngOnInit() {}
}
