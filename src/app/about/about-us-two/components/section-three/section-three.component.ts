import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html'
})
export class SectionThreeComponent implements OnInit {

  List: any[] = [
    {
      title: 'Devops',
      image: './assets/images/services/01.png',
      desc: 'The most powerful tool we have as developers is automation.',
      checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Analytics',
      image: './assets/images/services/02.png',
      desc: 'The most powerful tool we have as developers is automation.',
      checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Reporting',
      image: './assets/images/services/03.png',
      desc: 'The most powerful tool we have as developers is automation.',
      checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Costing',
      image: './assets/images/services/04.png',
      desc: 'The most powerful tool we have as developers is automation.',
      checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Intelligence',
      image: './assets/images/services/06.png',
      desc: 'The most powerful tool we have as developers is automation.',
      checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    },
    {
      title: 'Data Visualization',
      image: './assets/images/services/05.png',
      desc: 'The most powerful tool we have as developers is automation.',
      checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
