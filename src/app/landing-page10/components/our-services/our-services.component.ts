import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html'
})
export class OurServicesComponent implements OnInit {

  List: any[] = [
    {
      title: 'Data Visualization',
      icon: 'flaticon flaticon-calendar',
      desc: 'Established fact that a reader will be distracted readable looking layout.'
    },
    {
      title: 'Organization',
      icon: 'flaticon flaticon-growth-4',
      desc: 'Reader will be distracted by the readable content when looking.'
    },
    {
      title: 'Innovation',
      icon: 'flaticon flaticon-award',
      desc: 'Distracted by the readable content of a page when layout.'
    },
    {
      title: 'Perfect Event',
      icon: 'flaticon flaticon-growth-2',
      desc: 'Fact that a reader will be distracted page when looking at its layout.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
