import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})
export class SolutionsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Solutions',
    subTitle: 'Secure and governed. A single devops tool for all.'
  };

  List: any[] = [
    {
      id: 'tab-one-platform',
      title: 'One Platform',
      desc: [
        'AppScaleX helps teams quickly manage their infrastructure and enriches developer experience by mitigating the burden of unwanted manual tasks.',
        'It aims at merging development, quality assurance, and operations (deployment and integration) into a single, continuous set of processes.',
      ],
      active: true
    },
    {
      id: 'tab-time-value',
      title: 'Innovation',
      desc: [
        'Customers crave innovation.The faster the delivery cycle, the more innovative a service can be.',
        'Innovation is the key to attracting customers and keeping them satisfied. Bringing something new to the table that provides a creative solution is incredibly important.',
      ]
    },
    {
      id: 'tab-smart-work',
      title: 'Lower Costs',
      desc: [
        'Cost is a major factor in consumer satisfaction. Nobody wants to feel like they are paying for a service that does not satisfy them.',
        'A more efficient service makes customers more satisfied, and a cheaper service makes customers more satisfied too. In turn, this reduces abandonment rate and improves conversion.',
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
