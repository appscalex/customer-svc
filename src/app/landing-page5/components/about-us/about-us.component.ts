import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'PARTNER',
    subTitle: 'A trusted, proven tool.'
  };

  List: any[] = [
    {
      title: 'Customer Satisfaction',
      subtitle: 'By delivering new features and updates faster, with consistent quality.',
      image: './assets/images/services/10.png'
    },
    {
      title: 'Business Agility',
      subtitle: 'More responsive to change and hasten the time to market.',
      image: './assets/images/services/11.png'
    },
    {
      title: 'Increase Ops Alignment',
      subtitle: 'Translating an organizations Superordinate Goals into next level.',
      image: './assets/images/services/12.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
