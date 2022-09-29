import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
})
export class OurServicesComponent implements OnInit {

  titleSectionProp: any = {
    title: 'OUR SERVICES',
    subTitle: 'We Provide Numerous Services',
    description: ''
  };

  // tslint:disable-next-line:max-line-length
  Lists: any[] = [
    {
      title: 'Devops',
      img: '01.png',
      desc: 'The most powerful tool we have as developers is automation.',
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Managed Analytics',
      img: '01.png',
      desc: 'The most powerful tool we have as developers is automation.',
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Managed Analytics',
      img: '01.png',
      desc: 'The most powerful tool we have as developers is automation.',
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Managed Analytics',
      img: '01.png',
      desc: 'The most powerful tool we have as developers is automation.',
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Managed Analytics',
      img: '01.png',
      desc: 'The most powerful tool we have as developers is automation.',
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Managed Analytics',
      img: '01.png',
      desc: 'The most powerful tool we have as developers is automation.',
      chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
