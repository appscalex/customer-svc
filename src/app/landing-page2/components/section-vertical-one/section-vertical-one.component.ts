import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-one',
  templateUrl: './section-vertical-one.component.html'
})
export class SectionVerticalOneComponent implements OnInit {

  titleSectionProp: any = {
    title: 'OUR SERVICES',
    subTitle: 'We Provide Useful Services',
    description: ''
  };

    // tslint:disable-next-line:max-line-length
    Lists: any[] = [
      {
        title: 'Data Analytics',
        img: '01.png',
        desc: 'It is a long established fact that a reader will be distracted by the of readable content .',
        chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
      },
      {
        title: 'Managed Analytics',
        img: '01.png',
        desc: 'It is a long established fact that a reader will be distracted by the of readable content .',
        chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
      },
      {
        title: 'Managed Analytics',
        img: '01.png',
        desc: 'It is a long established fact that a reader will be distracted by the of readable content .',
        chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
      },
      {
        title: 'Managed Analytics',
        img: '01.png',
        desc: 'It is a long established fact that a reader will be distracted by the of readable content .',
        chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
      },
      {
        title: 'Managed Analytics',
        img: '01.png',
        desc: 'It is a long established fact that a reader will be distracted by the of readable content .',
        chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
      },
      {
        title: 'Managed Analytics',
        img: '01.png',
        desc: 'It is a long established fact that a reader will be distracted by the of readable content .',
        chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
