import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-two',
  templateUrl: './section-vertical-two.component.html'
})
export class SectionVerticalTwoComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'What It Offers',
    subTitle: 'AppScaleX In Action',
    // tslint:disable-next-line:max-line-length
    description: 'The most powerful tool that enables customers to automate, decrease risk, break silos and improve release management.'
  };

  progressBar1 = true;

  progressBarDetail: any[] = [
    {
      title: 'Deployment',
      percentage: 90
    },
    {
      title: 'Reporting',
      percentage: 65
    },
    {
      title: 'Cost Estimation',
      percentage: 75
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
