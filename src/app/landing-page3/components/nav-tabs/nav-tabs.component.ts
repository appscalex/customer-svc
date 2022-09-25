import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
})
export class NavTabsComponent implements OnInit {


  titleSectionProp: any = {
    class: 'text-center',
    title: 'our Services',
    subTitle: 'Explore Our Data Services'
  };

  navList: any[] = [
    {
      id: 'tab-software-development',
      title: 'Software Development',
      sub_title:"Choose Your Software Development Service",
      desc:"Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      active: true,
      chkList: ['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    },
    {
      id: 'tab-application-services',
      title: 'Application Services',
      sub_title:"Choose Your Application Service",
      desc:"Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    },
    {
      id: 'tab-data-analytics',
      title: 'Data Analytics',
      sub_title:"Choose Your Data Analytics Service",
      desc:"Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    },
    {
      id: 'tab-help-desk-services',
      title: 'Help Desk Services',
      sub_title:"Choose Your Help Desk Service",
      desc:"Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
