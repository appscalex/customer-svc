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
        'The most powerful tool we have as developers is automation.',
        'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
      ],
      active: true
    },
    {
      id: 'tab-time-value',
      title: 'Time value',
      desc: [
        'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
        'The most powerful tool we have as developers is automation.',
      ]
    },
    {
      id: 'tab-smart-work',
      title: 'Smart work',
      desc: [
        'The most powerful tool we have as developers is automation.',
        'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
        'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
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
