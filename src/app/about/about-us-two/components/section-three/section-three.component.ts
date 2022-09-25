import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html'
})
export class SectionThreeComponent implements OnInit {


  List: any[] = [
    { 
      title: 'Data Analytics',
      image: './assets/images/services/01.png',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
      checkList: [ 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center' ]
    },
    { 
      title: 'Managed Analytics',
      image: './assets/images/services/02.png',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
      checkList: [ 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center' ]
    },
    { 
      title: 'Big Data Services',
      image: './assets/images/services/03.png',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
      checkList: [ 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center' ]
    },
    { 
      title: 'Data Science',
      image: './assets/images/services/04.png',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
      checkList: [ 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center' ]
    },
    { 
      title: 'Business Intelligence',
      image: './assets/images/services/06.png',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
      checkList: [ 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center' ]
    },
    { 
      title: 'Data Visualization',
      image: './assets/images/services/05.png',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
      checkList: [ 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center' ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
