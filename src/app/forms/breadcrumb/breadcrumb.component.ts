import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  standalone: false,
})
export class BreadcrumbComponent implements OnInit {
  constructor() {}

  @Input() breadcrumbs: any;

  ngOnInit() {}
}
