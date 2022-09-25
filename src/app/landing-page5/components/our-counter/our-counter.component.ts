import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-counter',
  templateUrl: './our-counter.component.html'
})

export class OurCounterComponent implements OnInit {


  List: any[] = [
    {
      number: 50,
      title: 'Tranding Volumn',
      image: './assets/images/fancybox/5-1.png'
    },
    {
      number: 400,
      title: 'Transaction',
      image: './assets/images/fancybox/5-2.png'
    },
    {
      number: 150,
      title: 'Happy User',
      image: './assets/images/fancybox/5-3.png'
    },
    {
      number: 750,
      title: 'Custom Portfolio Created',
      image: './assets/images/fancybox/5-4.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
