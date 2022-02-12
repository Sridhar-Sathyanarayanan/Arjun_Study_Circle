import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html'
})
export class NotFoundComponent implements OnInit {

  constructor(public location: Location) { } 

  ngOnInit() { }

}

