import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})
export class SolutionsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Solutions',
    subTitle: 'Secure and governed. A single source of truth for all.'
  };

  List: any[] = [
    {
      id: 'tab-one-platform',
      title: 'One Platform',
      desc: [
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
      ],
      active: true
    },
    {
      id: 'tab-time-value',
      title: 'Time value',
      desc: [
        'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      ]
    },
    {
      id: 'tab-smart-work',
      title: 'Smart work',
      desc: [
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
        'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
      ]
    }
  ]
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
