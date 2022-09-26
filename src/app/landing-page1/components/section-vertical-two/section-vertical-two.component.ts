import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-two',
  templateUrl: './section-vertical-two.component.html'
})
export class SectionVerticalTwoComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'How We Work',
    subTitle: 'See Flash Infra In Action',
    // tslint:disable-next-line:max-line-length
    description: 'The most powerful tool we have as developers is automation.It is a long established fact.'
  };

  progressBar1 = true;

  progressBarDetail: any[] = [
    {
      title: 'Deployment',
      percentage: 70
    },
    {
      title: 'Reporting',
      percentage: 50
    },
    {
      title: 'Cost Estimation',
      percentage: 80
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
