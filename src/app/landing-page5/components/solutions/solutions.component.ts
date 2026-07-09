import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html'
})
export class SolutionsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Solutions',
    subTitle: 'Secure and governed. A single devops tool for all'
  };

  List: any[] = [
    {
      id: 'tab-one-platform',
      title: 'One Platform',
      tag: 'Unified Tooling',
      desc: [
        'AppScaleX helps teams quickly manage their infrastructure and enriches developer experience by mitigating the burden of unwanted manual tasks.',
        'It aims at merging development, quality assurance, and operations into a single, continuous set of processes — giving every team full visibility and control.',
      ],
      active: true
    },
    {
      id: 'tab-time-value',
      title: 'Innovation',
      tag: 'Faster Delivery',
      desc: [
        'The faster the delivery cycle, the more innovative a service can be. AppScaleX accelerates your pipeline so your teams can focus on what matters — shipping value.',
        'Bringing something new to the table that provides a creative solution is incredibly important. We give teams the headroom to innovate instead of fighting infrastructure.',
      ]
    },
    {
      id: 'tab-smart-work',
      title: 'Lower Costs',
      tag: 'Efficiency at Scale',
      desc: [
        'A more efficient service makes customers more satisfied, and a leaner infrastructure makes your finance team happy too. AppScaleX eliminates wasted compute and idle pipelines.',
        'In turn, streamlined operations reduce abandonment rate and improve conversion — letting you do more with less and scale without proportional cost growth.',
      ]
    }
  ];

  activeId: string = '';

  constructor() { }

  ngOnInit() {
    const first = this.List.find(n => n.active);
    this.activeId = first ? first.id : (this.List[0] ? this.List[0].id : '');
  }

  setActive(id: string) {
    this.activeId = id;
  }

  activeIndex(): number {
    return this.List.findIndex(n => n.id === this.activeId);
  }

}
