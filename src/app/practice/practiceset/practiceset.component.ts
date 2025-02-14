import { Component, OnInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import {GlobalConstants} from '../../constants/app.constants';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-practice-set',
  templateUrl: './practiceset.component.html',
})
export class PracticeSetComponent implements OnInit {
  topics;
  page;
  breadcrumbs: any;
  sets: any;
  hours: any = 0;
  minutes: any = 0;
  seconds: any = 0;
  timer: any;
  disabledStart: any = false;
  disabledStop: any = true;
  disabledReset: any = true;
  disabledRetake: any = true;
  disabledSubmit: any = false;
  disabledResetAnswers: any = false;
  correctAnswers = 0;
  practiceForm: any;
  @ViewChildren('section') section: QueryList<ElementRef>;
  
  constructor(public router:Router, private fb: FormBuilder, private http: HttpClient) { 
    this.page = this.router.url.split("/");
    this.topics = GlobalConstants[this.page[1]+ "Topics"];
    this.breadcrumbs = GlobalConstants["breadcrumbs_"+this.page[1]];
  }
  
  ngOnInit() { 
    this.practiceForm = this.fb.group({});
  }

  startTimer() {
    this.disable(true, false, true);
    this.timer = setInterval(() => {
      this.seconds++;
      if(this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if(this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.disable(false, true, false);
  }

  resetTimer() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.disable(false, true, true);
  }

  disable(start, stop, reset) {
    this.disabledStart = start;
    this.disabledStop = stop;
    this.disabledReset = reset;
  }

  reset() {
    this.practiceForm.reset();
    this.disabledResetAnswers = true;
    this.correctAnswers = 0;
  }

  evaluate() {
    this.disable(true, true, true);
    this.disabledRetake = false;
    this.disabledSubmit = true;
    this.disabledResetAnswers = true;
    this.stopTimer();
    this.practiceForm.disable();
    this.sets.forEach((v, ind) => {
      if(this.practiceForm.value['question' + ind]) {
        if(v.correctAnswer.value === this.practiceForm.value['question'+ind]) {
          this.section.toArray()[ind].nativeElement.classList.add('themeBGColor4');
          this.correctAnswers++;
        } else if(v.correctAnswer.value !== this.practiceForm.value['question'+ind]) {
          this.section.toArray()[ind].nativeElement.classList.add('themeBGColor5');
        }
      }
    })
  }

  retake() {
    this.resetTimer();
    this.disabledRetake = true;
    this.disabledSubmit = false;
    this.disabledResetAnswers = false;
    this.practiceForm.reset();
    this.practiceForm.enable();
    let temp = this.section.toArray();
    temp.forEach((d, ind) =>{
      d.nativeElement.classList.remove('themeBGColor5', 'themeBGColor4');
    })
  }
}

