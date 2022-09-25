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
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
      image: './assets/images/services/01.png'
    },
    {
      title: 'Analyzed',
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
      image: './assets/images/services/02.png'
    },
    {
      title: 'Deploy',
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
      image: './assets/images/services/03.png'
    }
  ];

  List2: any[] = [
    {
      title: 'MashUp',
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
      image: './assets/images/services/04.png'
    },
    {
      title: 'Impact',
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
      image: './assets/images/services/05.png'
    },
    {
      title: 'Control',
      subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
      image: './assets/images/services/06.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
