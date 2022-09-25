import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'PARTNER',
    subTitle: 'A trusted, proven leader.'
  };
  
  List: any[] = [
    {
      title: 'Individual Analyst',
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
      image: './assets/images/services/10.png'
    },
    {
      title: 'Teams & Organizations',
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
      image: './assets/images/services/11.png'
    },
    {
      title: 'Embedded Analytics',
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
      image: './assets/images/services/12.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
