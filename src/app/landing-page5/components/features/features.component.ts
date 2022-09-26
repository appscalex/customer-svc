import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'FEATURES',
    subTitle: 'Everything You Need to Build Powerful Analytic Apps'
  };

  List1: any[] = [
    {
      title: 'Embeded',
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/01.png'
    },
    {
      title: 'Analyzed',
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/02.png'
    },
    {
      title: 'Deploy',
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/03.png'
    }
  ];

  List2: any[] = [
    {
      title: 'MashUp',
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/04.png'
    },
    {
      title: 'Impact',
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/05.png'
    },
    {
      title: 'Control',
      subtitle: 'The most powerful tool we have as developers is automation.',
      image: './assets/images/services/06.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
