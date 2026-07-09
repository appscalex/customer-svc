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
      desc: 'Deploy software to testing and production environments with the push of a button. Automate rollbacks, blue-green strategies, and elastic scaling across your full stack.',
      points: [
        'Increases the scale of automation',
        'Build and test virtually any project',
        'Easy setup via web interface',
        'Distributes tasks for higher concurrency',
        'Built-in GUI for easy updates',
        'Deploy security patches with no hassle'
      ]
    },
    {
      id: 'tab-machine-learning',
      title: 'Testing',
      img: '02.png',
      link: '/services',
      subtitle: 'Full Visibility Across Your DevOps Pipeline',
      desc: 'The smart data testing solution engineered for continuous quality — shift quality left, highlight risk early, and enforce compliance at every stage.',
      points: [
        'Shift quality left, highlight risk and issues',
        'Fully customizable approval process',
        'Full audit trail for regulatory compliance',
        'Unique automated rollback on failure'
      ]
    },
    {
      id: 'tab-analytical-ai',
      title: 'Delivery',
      img: '01.png',
      link: '/services',
      subtitle: 'Deliver High-Performing Apps at Any Scale',
      desc: 'A continuous delivery strategy that lets DevOps teams release confidently — with platform extensibility, smart alerting, and real-time event intelligence.',
      points: [
        'Supports platform extensibility',
        'Gain visibility into critical systems',
        'Scheduling and automated escalations',
        'Event intelligence for actionable insights',
        'Reliable and rich alerting facility',
        'Provide real-time alerts'
      ]
    },
    {
      id: 'tab-computer-vision',
      title: 'Visualization',
      img: '04.png',
      link: '/services',
      subtitle: 'Understand Massive Amounts of Data Properly',
      desc: 'An integrated visual platform for DevOps engineers — plan, trigger, document, and control every map execution from a unified dashboard.',
      points: [
        'Plan automation processes visually',
        'Each execution auto-documented',
        'Trigger executions from remote events',
        'Full control over map execution'
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

}
