import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html'
})
export class OurServiceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: '',
    subTitle: 'Our Services',
    description: 'Marketing Analytics Services'
  };

  List: any[] = [
    {
      title: 'Google Analytics',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/11-1.png',
      bg_img: './assets/images/bg/11-bg.png',
    },
    {
      title: 'Marketing Tracking',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/11-2.png',
      bg_img: './assets/images/bg/11-bg.png',
    },
    {
      title: 'Services and Solutions',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/11-3.png',
      bg_img: './assets/images/bg/11-bg.png',
    },
    {
      title: 'Conversion Optimization',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/11-4.png',
      bg_img: './assets/images/bg/11-bg.png',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
