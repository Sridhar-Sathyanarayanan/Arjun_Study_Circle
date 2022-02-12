import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html'
})
export class HomePageComponent implements OnInit {

  getStarted;
  learnMore;
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    
  }

}

