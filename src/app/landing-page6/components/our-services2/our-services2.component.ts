import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services2',
  templateUrl: './our-services2.component.html'
})
export class OurServices2Component implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR SERVICES',
    subTitle: 'We Provide Useful Services'
  };

  List: any[] = [
    { 
      title: 'Generate Ideas',
      image: './assets/images/fancybox/6-1.png',
      desc: 'It is a long established fact that a fre ader will be distracted by the .'
    },
    { 
      title: 'Collect Data',
      image: './assets/images/fancybox/6-2.png',
      desc: 'It is a long established fact that a fre ader will be distracted by the .'
    },
    { 
      title: 'Create Design',
      image: './assets/images/fancybox/6-3.png',
      desc: 'It is a long established fact that a fre ader will be distracted by the .'
    },
    { 
      title: 'Launch Project',
      image: './assets/images/fancybox/6-4.png',
      desc: 'It is a long established fact that a fre ader will be distracted by the .'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
