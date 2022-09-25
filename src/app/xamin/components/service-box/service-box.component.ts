import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html'
})
export class ServiceBoxComponent implements OnInit {
  @Input() Lists: any[];
  @Input() titleSectionProp: any;

  constructor() { }

  ngOnInit() {
  }

}
