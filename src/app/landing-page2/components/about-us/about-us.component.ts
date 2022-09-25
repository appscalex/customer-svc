import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    title: 'ABOUT US',
    subTitle: 'Human Behaviour, Data Science',
    description: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.'
  };

  Lists: any = {
    isOuter: false,
    img: '03.png',
    chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
  };
  constructor() { }

  ngOnInit() {
  }

}
