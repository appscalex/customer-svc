import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html'
})
export class BenefitsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'BENEFITS',
    subTitle: 'Benefits With Us',
  };

  List: any[] = [
    {
      title: 'Predictive insights',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/7-5.png',
      bg_img: './assets/images/fancybox/bg-7-2.png',
    },
    {
      title: 'Smarter Workforce',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/7-6.png',
      bg_img: './assets/images/fancybox/bg-7-2.png',
    },
    {
      title: 'Proficiency',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/7-7.png',
      bg_img: './assets/images/fancybox/bg-7-2.png',
    },
    {
      title: 'Consistent accuracy',
      desc: 'There are many variations of passages of Lorem Ipsum available, in',
      image: './assets/images/fancybox/7-8.png',
      bg_img: './assets/images/fancybox/bg-7-2.png',
    }

  ];
  
  constructor() { }

  ngOnInit() {
  }

}
