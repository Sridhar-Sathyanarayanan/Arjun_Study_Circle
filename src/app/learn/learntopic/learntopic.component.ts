import { Component, OnInit, ViewChild } from "@angular/core";
import { GlobalConstants } from "../../constants/app.constants";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { MatAccordion } from "@angular/material/expansion";

@Component({
  selector: "app-learn-topic",
  templateUrl: "./learntopic.component.html",
  standalone: false,
})
export class LearnTopicComponent implements OnInit {
  topics;
  page;
  breadcrumbs: any;
  videoURL: any;
  @ViewChild("accordion", { static: true }) accordion: MatAccordion;

  constructor(public router: Router, private _sanitizer: DomSanitizer) {
    this.page = this.router.url.split("/");
    this.topics = GlobalConstants[this.page[1] + "Topics"];
    this.breadcrumbs = GlobalConstants["breadcrumbs_" + this.page[1]];
    this.videoURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/GyA8QdXWsgM"
    );
  }

  ngOnInit() {}
}
