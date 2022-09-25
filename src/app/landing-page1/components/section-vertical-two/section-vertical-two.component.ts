import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-two',
  templateUrl: './section-vertical-two.component.html'
})
export class SectionVerticalTwoComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'How We Work',
    subTitle: 'See Xamin In Action',
    // tslint:disable-next-line:max-line-length
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact.'
  };


  progressBar1: boolean = true;

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

  constructor() { }

  ngOnInit() {
  }

}
