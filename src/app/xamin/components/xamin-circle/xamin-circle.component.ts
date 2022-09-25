import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-xamin-circle',
  templateUrl: './xamin-circle.component.html'
})
export class XaminCircleComponent implements OnInit {

  @Input() circleData: any;

  constructor() { }

  ngOnInit() {
  }

}
