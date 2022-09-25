import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'ABOUT US OUR COMPANY',
    subTitle: 'What is Predictive Analytics?'
  };

  List: any[] = [
    {
      id: 'tab-about-us',
      title: 'About Us',
      desc: [
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
      ],
      active: true
    },
    {
      id: 'tab-our-vision',
      title: 'Our Vision',
      desc: [
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      ]
    },
    {
      id: 'tab-our-mission',
      title: 'Our Mission',
      desc: [
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tab-content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }
}
