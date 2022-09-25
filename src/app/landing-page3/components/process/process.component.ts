import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
})
export class ProcessComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'PROCESS',
    subTitle:  'Our Software Testing Process'
  };

  circle1Data: any = {
    img: '01.png',
    title: 'Data for all your people',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '0.6s',
    positionClass: 'right',
    type:'xamin-process'

  };

  circle2Data: any = {
    class: 'mt-4 mt-md-0',
    img: '02.png',
    title: 'A new breed of AI',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '1s',
    positionClass: 'right',
    type:'xamin-process'

  };

  circle3Data: any = {
    class: 'mt-4 mt-md-0',
    img: '03.png',
    title: 'Analytics business',
    description: 'It is a long established fact that a reader will be distracted by the of readable.',
    delay: '1.4s',
    type:'xamin-process'

  };


  constructor() { }

  ngOnInit() {
  }

}
