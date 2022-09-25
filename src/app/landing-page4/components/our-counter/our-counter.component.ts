import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-counter',
  templateUrl: './our-counter.component.html'
})
export class OurCounterComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-white  text-left',
    title: '',
    subTitle: 'Transform Your Business Faster Using Data Science and Analysis',
    description: 'we keep on working till to make customer satisfaction.'
  };

  constructor() { }

  ngOnInit() {
  }

}
