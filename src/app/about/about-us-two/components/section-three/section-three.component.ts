import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html'
})
export class SectionThreeComponent implements OnInit {

  List: any[] = [
    {
      title: 'Deployment',
      image: './assets/images/services/01.png',
      desc: 'It is a DevOps tool for monitoring execution of repeated tasks.',
      checkList: ['It increases the scale of automation.', 'It offers to support building and testing virtually any project.', 'It can easily set up and configured via web interface.']
    },
    {
      title: 'Visualization',
      image: './assets/images/services/02.png',
      desc: 'It is an Integrated Visual platform for DevOps engineers.',
      checkList: ['Allows users planning the automation process.', 'Each execution is automatically documented.', 'User can trigger an execution of a map from remote events.']
    },
    {
      title: 'Monitoring',
      image: './assets/images/services/03.png',
      desc: 'It is a DevOps platform for high-speed server monitoring management.',
      checkList: ['Start monitoring and collecting data for all environments.', 'Centralized log management and server monitoring.', 'Watch all the new events arrive in near real-time.']
    },
    {
      title: 'Auditing',
      image: './assets/images/services/04.png',
      desc: 'It is a DevOps solution for continuous configuration and auditing.',
      checkList: ['Workflow offers various options like non-expert users and expert users.', 'Enforce configuration over time.', 'Provide Inventory of all managed nodes.']
    },
    {
      title: 'Testing',
      image: './assets/images/services/06.png',
      desc: 'It offers the only DevOps and test automation platform engineered for all.',
      checkList: ['Shift quality left highlight risk, impact and issues.', 'Fully customizable approval process.', 'Full audit trail enables regulatory compliance.']
    },
    {
      title: 'Delivery',
      image: './assets/images/services/05.png',
      desc: 'It is a DevOps tool that helps businesses to enhance their brand reputation.',
      checkList: ['It supports Platform Extensibility', 'Gain visibility into critical systems and applications.', 'It allows scheduling & automated Escalations.']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
