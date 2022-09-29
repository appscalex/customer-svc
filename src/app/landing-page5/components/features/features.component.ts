import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'FEATURES',
    subTitle: 'Features Bring By Flash Infra As Devops Tool'
  };

  List1: any[] = [
    {
      title: 'Software Build',
      subtitle: 'Converts source code files into standalone software artifact after compiling and packaging.',
      image: './assets/images/services/01.png'
    },
    {
      title: 'Continuous Deployment',
      subtitle: 'Automated pipeline that takes code from developers and automatically deploys it to production end users.',
      image: './assets/images/services/02.png'
    },
    {
      title: 'Continuous Testing',
      subtitle: 'Executes automated tests as part of the software delivery pipeline to obtain immediate feedback on the business risks.',
      image: './assets/images/services/03.png'
    }
  ];

  List2: any[] = [
    {
      title: 'Collaboration',
      subtitle: 'It enables development and operations teams coalesce into a functional team that communicates and collaborates throughout the entire cycle.',
      image: './assets/images/services/04.png'
    },
    {
      title: 'Communication',
      subtitle: 'It has support to track DevOps notifications to focus on specific events when multiple items configured for each environments.',
      image: './assets/images/services/05.png'
    },
    {
      title: 'Continuous Monitoring',
      subtitle: 'It supports ongoing monitoring of the code in operation and the underlying infrastructure that supports it.',
      image: './assets/images/services/06.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
