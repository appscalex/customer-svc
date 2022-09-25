
@Component({
  selector: 'app-about-us2',
  templateUrl: './about-us2.component.html'
})
export class AboutUs2Component implements OnInit {

  titleSectionProp: any = {
    title: 'ABOUT US',
    subTitle: 'Human Behaviour, Data Science',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted many desktop.'
  };

  progressBar1: boolean = false;


  progressBarDetail: any[] = [
    {
      title: 'Big Data Services',
      percentage: 70
    },
    {
      title: 'Data Science Consulting',
      percentage: 50
    },
    {
      title: 'Data Analytics Consulting',
      percentage: 80
    }
  ];

  tecIcon: any[] = [
    {
      className:'img_icon_one',
      img:"services-small-1.png"
    },
    {
      className:'img_icon_two',
      img:"services-small-2.png"
    },
    {
      className:'img_icon_three',
      img:"services-small-3.png"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
