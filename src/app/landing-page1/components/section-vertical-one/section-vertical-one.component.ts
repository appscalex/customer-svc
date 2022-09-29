import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-one',
  templateUrl: './section-vertical-one.component.html'
})

export class SectionVerticalOneComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'About us',
    subTitle: 'You Build It, You Run It',
    // tslint:disable-next-line:max-line-length
    description: 'Flash Infra automate your DevOps practice in order to eliminate repetitive tasks.'
  };

  // tslint:disable-next-line:max-line-length
  lists: any[] = ['Enhanced Operational Efficiency', 'Frequent Deployment', 'Increased Collaboration', 'Faster Recovery Time'];

  constructor() { }

  ngOnInit() {
  }

}
