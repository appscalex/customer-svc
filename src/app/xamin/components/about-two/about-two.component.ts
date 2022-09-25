import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-two',
  templateUrl: './about-two.component.html',
})
export class AboutTwoComponent implements OnInit {

  @Input() List: any;
  @Input() titleSectionProp: any[];
  constructor() { }

  ngOnInit() {
  }

}
