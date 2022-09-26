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
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/10.png'
    },
    {
      title: 'Teams & Organizations',
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/11.png'
    },
    {
      title: 'Embedded Analytics',
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/12.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
