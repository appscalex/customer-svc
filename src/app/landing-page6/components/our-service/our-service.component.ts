import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html'
})
export class OurServiceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR SERVICES',
    subTitle: 'We Provide Useful Services'
  };

  List: any[] = [
    { 
      id: 'tab-software-development',
      title: 'Software Development',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: './assets/images/services/6-1.png',
      tabImage : './assets/images/services/13.png',
      active: true
    },
    { 
      id: 'tab-application-services',
      title: 'Application Services',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: './assets/images/services/6-2.png',
      tabImage : './assets/images/services/14.png'
    },
    { 
      id: 'tab-data-analytics',
      title: 'Data Analytics',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: './assets/images/services/6-3.png',
      tabImage : './assets/images/services/13.png'
    },
    { 
      id: 'tab-help-desk',
      title: 'Help Desk Services',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      image: './assets/images/services/6-4.png',
      tabImage : './assets/images/services/14.png'
    }
  ];

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tab-content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }
  constructor() { }

  ngOnInit() {
  }

}
