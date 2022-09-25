import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  @Input() List: any[];
  @Input() titleSectionProp: any[];


  constructor() { }

  ngOnInit() {
  }

}
