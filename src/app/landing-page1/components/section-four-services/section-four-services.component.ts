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
      title: 'Testing',
      img: '02.png',
      link: '/services',
      subtitle: 'A complete solution so that you have full visibility as you transform or adopt your DevOps culture.',
      subtitle2: 'It offers the only DevOps and test automation platform engineered for all.',
      desc: 'It is the smart data testing solution that is the first-of-its-kind full DevOps solution for continuous data testing.',
      chkList: ['Shift quality left highlight risk, impact and issues.', 'Fully customizable approval process.', 'Full audit trail enables regulatory compliance.', 'Unique rolls back deployments.'],
    },
    {
      id: 'tab-analytical-ai',
      title: 'Delivery',
      img: '01.png',
      link: '/services',
      subtitle: 'It is a DevOps tool that helps businesses to enhance their brand reputation.',
      desc: 'This solution supporting continuous delivery strategy. It also allows DevOps teams to deliver high-performing apps.',
      chkList1: ['It supports Platform Extensibility.', 'Gain visibility into critical systems and applications.'],
      chkList2: ['It allows scheduling & automated Escalations.', 'Event intelligence for actionable insights.'],
      chkList3: ['Reliable & Rich Alerting facility.', 'Provide Real-time alerts.']
    },
    {
      id: 'tab-computer-vision',
      title: 'Visualization',
      img: '04.png',
      link: '/services',
      subtitle: 'Understand Massive Amounts Of Data Properly',
      subtitle2: 'It is an Integrated Visual platform for DevOps engineers.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
      chkList: ['Allows users planning the automation process.', 'ach execution is automatically documented.', 'User can trigger an execution of a map from remote events.', 'it can control map execution.'],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
