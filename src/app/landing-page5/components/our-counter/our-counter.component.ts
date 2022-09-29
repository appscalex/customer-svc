import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-counter',
  templateUrl: './our-counter.component.html'
})

export class OurCounterComponent implements OnInit {

  List: any[] = [
    {
      number: 150,
      title: 'Happy Customers',
      image: './assets/images/fancybox/5-3.png'
    },
    {
      number: 25000,
      title: 'Total Users',
      image: './assets/images/fancybox/5-2.png'
    },
    {
      number: '55%',
      title: 'Cost Save',
      image: './assets/images/fancybox/5-4.png'
    },
    {
      number: 80000,
      title: 'Total Deployments',
      image: './assets/images/fancybox/5-1.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
