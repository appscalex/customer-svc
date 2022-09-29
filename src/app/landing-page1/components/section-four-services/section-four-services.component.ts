import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four-services',
  templateUrl: './section-four-services.component.html'
})
export class SectionFourServicesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'our Services',
    subTitle: 'Explore Our Services'
  };

  navList: any[] = [
    {
      id: 'tab-big-data',
      title: 'Deployment',
      img: '03.png',
      link: '/services',
      active: true,
      subtitle: 'Choose Your Deployment Strategy Wisely',
      desc: 'It enables you to deploy your software to testing and production environments with the push of a button.',
      chkList1: ['It increases the scale of automation.', 'It offers to support building and testing virtually any project.'],
      chkList2: ['It can easily set up and configured via web interface.', 'it distribute tasks across multiple machines thereby increasing concurrency.'],
      chkList3: ['It requires little maintenance and has built-in GUI tool for easy updates.', 'It enables you to deploy security patches with no hassle.']
    },
    {
      id: 'tab-machine-learning',
      title: 'Costing',
      img: '02.png',
      link: '/services',
      subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
      subtitle2: 'Dignissimos ducimus qui blanditiis',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
      chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
    },
    {
      id: 'tab-analytical-ai',
      title: 'Analytics',
      img: '01.png',
      link: '/services',
      subtitle: 'Choose Your Software Development Service by Category',
      desc: 'Tame your big data through robust solutions that empower data collection, storage, processing and analysis.',
      chkList1: ['Advance Advisory Team', 'Simply dummy text of the'],
      chkList2: ['Professional Consulting Services', 'It is a long established fact.'],
      chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable']
    },
    {
      id: 'tab-computer-vision',
      title: 'Visualization',
      img: '04.png',
      link: '/services',
      subtitle: 'Understand Massive Amounts Of Data Properly',
      subtitle2: 'It is an Integrated Visual platform for DevOps engineers. It helps to make automation development fast and easy.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
      chkList: ['Allows users planning the automation process.', 'ach execution is automatically documented.', 'User can trigger an execution of a map from remote events.', 'it can control map execution.'],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
