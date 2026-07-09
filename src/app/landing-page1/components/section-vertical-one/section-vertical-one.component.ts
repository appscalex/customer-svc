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
    description: 'AppScaleX automates your DevOps practice to eliminate repetitive tasks, accelerate delivery, and give your teams full ownership of the pipeline.'
  };

  features: any[] = [
    {
      icon: 'fa-tachometer',
      title: 'Operational Efficiency',
      desc: 'Automate repetitive workflows and let your team focus on building.'
    },
    {
      icon: 'fa-cloud-upload',
      title: 'Frequent Deployment',
      desc: 'Ship faster with automated CI/CD and zero-downtime release strategies.'
    },
    {
      icon: 'fa-users',
      title: 'Increased Collaboration',
      desc: 'Unified tooling breaks silos between dev, QA, and ops.'
    },
    {
      icon: 'fa-heartbeat',
      title: 'Faster Recovery',
      desc: 'Automated rollbacks and blue-green deploys minimise incident impact.'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
