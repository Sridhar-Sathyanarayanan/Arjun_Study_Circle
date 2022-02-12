import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../constants/app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-topic',
  templateUrl: './practicetopic.component.html'
})
export class PracticeTopicComponent implements OnInit {
  topics;
  page;
  breadcrumbs: any;
  count = 0;
  sections: any = [];
  
  constructor(public router:Router) { 
    this.page = this.router.url.split("/");
    this.topics = GlobalConstants[this.page[1]+ "Topics"];
    this.breadcrumbs = GlobalConstants["breadcrumbs_"+this.page[1]];
    this.count = GlobalConstants[this.page[1]+"_"+this.page[2]][this.page[3]];
  }
  
  ngOnInit() { 
    for(let i = 0; i < this.count; i++){
      this.sections.push({label: 'Practice Set - ' + (i+1), route:"/"+this.page[1]+"/" + this.page[2] +"/" +this.page[3], param: 'set-'+(i+1)});
    }
  }

}

