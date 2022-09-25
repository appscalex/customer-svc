import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'pr-lg-5 text-left',
    title: '',
    subTitle: 'What can you do with predictive analytics',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
  };


  List: any[] = [
    { title: 'Business performance', image: './assets/images/fancybox/6-5.png' },
    { title: 'Predict behavior', image: './assets/images/fancybox/6-6.png' },
    { title: 'Drive strategic', image: './assets/images/fancybox/6-5.png' },
    { title: 'Business performance', image: './assets/images/fancybox/6-6.png' },
    { title: 'Understand customers', image: './assets/images/fancybox/6-7.png' },
    { title: 'Predict behavior', image: './assets/images/fancybox/6-8.png' },
    { title: 'Identify trends', image: './assets/images/fancybox/6-6.png' },
    { title: 'Insights into data', image: './assets/images/fancybox/6-7.png' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
