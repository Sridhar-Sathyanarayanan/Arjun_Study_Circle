import { Component, OnInit, Input } from '@angular/core';
import { GlobalConstants } from '../constants/app.constants';
import { Router } from '@angular/router';
import mermaid from 'mermaid';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html'
})
export class LearnComponent implements OnInit {
  topics;
  page;
  breadcrumbs: any;
  flowChart: any;
  stringFlowChart: any = "";
  constructor(public router: Router) {
    this.page = this.router.url.split("/");
    this.topics = GlobalConstants[this.page[1] + "Topics"];
    this.breadcrumbs = GlobalConstants["breadcrumbs_" + this.page[1]];
  }

  ngOnInit() {
    this.createFlowchart();
    mermaid.initialize({});
  }
  createFlowchart() {
    this.flowChart = [
      "graph TD",
      "id1(Start) --> id2[Ques 1]",
      "id2 -.-> id3[[Ques 2]] & id4[(Ques 3)]",
      "id3 & id4 --passing--> id5((Ques 4))",
      "id5 ==> id6",
      "id6([Ques 5]) <--> id7>Ques 6]",
      "id6 --> id2",
      "id3 --- id7", 
      "id7 --> id8{End}",
    ]; 
    this.stringFlowChart = this.flowChart.join("\n");
  }

}
