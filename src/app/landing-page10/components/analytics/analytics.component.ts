import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html'
})
export class AnalyticsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'mb-0 text-left border-right',
    title: '',
    subTitle: 'Unleash the Power of Visual Analytics'
  };

  constructor() { }

  ngOnInit() {
  }

}
