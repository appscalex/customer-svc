import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html'
})
export class HowItWorkComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'WORK',
    subTitle: 'How it works',
  };

  List: any[] = [
    {
      title: 'Text',
      desc: 'It is a long established fact that a fre ader will be distracted by the .',
      image: './assets/images/fancybox/7-1.png',
      arrow_image: './assets/images/fancybox/arrow-7.png',
      arrowbg_img: './assets/images/fancybox/bg-7-1.png',
    },
    {
      title: 'ML Algorithms',
      desc: 'It is a long established fact that a fre ader will be distracted by the .',
      image: './assets/images/fancybox/7-2.png',
      arrow_image: './assets/images/fancybox/arrow-7.png',
      arrowbg_img: './assets/images/fancybox/bg-7-1.png',
    },
    {
      title: 'Classified Model',
      desc: 'It is a long established fact that a fre ader will be distracted by the .',
      image: './assets/images/fancybox/7-3.png',
      arrow_image: './assets/images/fancybox/arrow-7.png',
      arrowbg_img: './assets/images/fancybox/bg-7-1.png',
    },
    {
      title: 'Prediction',
      desc: 'It is a long established fact that a fre ader will be distracted by the .',
      image: './assets/images/fancybox/7-4.png',
      arrowbg_img: './assets/images/fancybox/bg-7-1.png',
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
