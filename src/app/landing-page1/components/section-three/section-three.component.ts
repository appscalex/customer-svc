import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html'
})
export class SectionThreeComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'How it’s work',
    subTitle: 'How Does Xamin Works'
  };

  circle1Data: any = {
    img: '01.png',
    title: 'Data for all your people',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '0.6s',
    positionClass: 'right',
    type:'consult-services'

  };

  circle2Data: any = {
    class: 'mt-4 mt-md-0',
    img: '02.png',
    title: 'A new breed of AI',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '1s',
    positionClass: 'right',
    type:'consult-services'

  };

  circle3Data: any = {
    class: 'mt-4 mt-md-0',
    img: '03.png',
    title: 'Analytics business',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '1.4s',
    type:'consult-services'

  };

  constructor() { }

  ngOnInit() {
  }

}
