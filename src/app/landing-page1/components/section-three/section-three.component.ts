import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html'
})
export class SectionThreeComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'How it’s work',
    subTitle: 'How Does AppScaleX Works'
  };

  circle1Data: any = {
    img: '01.png',
    title: 'Connect',
    description: 'Connect with your cloud providers and bootstraps everything in less than 10 minutes with a single click.',
    delay: '0.6s',
    positionClass: 'right',
    type: 'consult-services'

  };

  circle2Data: any = {
    class: 'mt-4 mt-md-0',
    img: '02.png',
    title: 'Build',
    description: 'Manage your code repositories, build and test your code, and deploy your applications with ease.',
    delay: '1s',
    positionClass: 'right',
    type: 'consult-services'

  };

  circle3Data: any = {
    class: 'mt-4 mt-md-0',
    img: '03.png',
    title: 'Deploy',
    description: 'Distributed workflows for all kinds of accelerated and transparent tests and deployments across platforms. ',
    delay: '1.4s',
    type: 'consult-services'

  };

  constructor() { }

  ngOnInit() {
  }

}
