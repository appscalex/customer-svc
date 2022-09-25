import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'About Marketing Analytics',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
  };

  checklist: any[] = [
    'Marketing Tracking',
    'Services and Solutions',
    'Predicting future',
    'Reporting on the pas',
    'Google Analytics',
    'Analyzing the present'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
