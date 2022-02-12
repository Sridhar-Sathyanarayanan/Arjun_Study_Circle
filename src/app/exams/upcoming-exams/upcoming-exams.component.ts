import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../constants/app.constants';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { RemoteCallService } from 'src/app/config/config.service';

@Component({
  selector: 'app-upcoming-exams',
  templateUrl: './upcoming-exams.component.html',
  providers: [RemoteCallService]
})

export class UpcomingExamsComponent implements OnInit {
  topics;
  page;
  breadcrumbs: any;
  practiceForm: any;
  dataSource: any = [];
  columnsToDisplay: any;
  headers: any;

  constructor(public router:Router, private _sanitizer: DomSanitizer, private remoteService: RemoteCallService) { 
    this.page = this.router.url.split("/");
    this.topics = GlobalConstants[this.page[1]+ "Topics"];
    this.breadcrumbs = GlobalConstants["breadcrumbs_"+this.page[1]];
  }

  ngOnInit() { 
    this.remoteService.sendRequest("assets/data/upcoming-exams/upcoming-exams.json", "get").subscribe(d => {
      this.dataSource = d.content;
      this.columnsToDisplay = d.columnsToDisplay;
      this.headers = d.headers;
    });
  }

}
