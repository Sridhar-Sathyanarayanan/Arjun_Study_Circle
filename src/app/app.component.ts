import { Component, OnInit, DoCheck } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConstants } from './constants/app.constants';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, DoCheck {
  menu: any;
  languages: any;
  langSelect: any;
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ta']);
    translate.setDefaultLang('en');
  }
  ngOnInit() {
    this.langSelect = new FormControl("en");
    this.menu = GlobalConstants.menu;
    this.languages = GlobalConstants.languages;
  }

  ngDoCheck() {
    console.log();
  }
  changeLang() {
    this.translate.use(this.langSelect.value);
  }

}
