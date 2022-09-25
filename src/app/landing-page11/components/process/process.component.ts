import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html'
})
export class ProcessComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Process',
    subTitle: 'What you can do with marketing analytics'
  };

  List: any[] = [
    { 
      title: 'Reporting on the past',
      image: './assets/images/services/01.png',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Predicting future',
      image: './assets/images/services/01.png',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Analyzing the present',
      image: './assets/images/services/01.png',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
