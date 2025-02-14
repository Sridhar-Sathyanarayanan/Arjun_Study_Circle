import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalConstants } from "../constants/app.constants";

@Component({
  selector: "app-home-page",
  templateUrl: "./homepage.component.html",
  standalone: false,
})
export class HomePageComponent implements OnInit {
  homePageTiles;
  quote;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Taking random quote
    this.route.data.subscribe((data) => {
      this.quote =
        data["quotes"][Math.floor(Math.random() * data["quotes"].length)];
    });
    this.homePageTiles = GlobalConstants.homePageTiles;
  }
}
