import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent implements OnInit {

  @Input() dataSource;
  @Input() columnsToDisplay;
  @Input() headers;
  @Input() rowClass;
  @Input() headerClass;


  constructor() { }

  ngOnInit() {
    console.log("sfd");
  }

}