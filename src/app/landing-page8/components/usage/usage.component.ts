import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'WHERE TO USE',
    subTitle: 'Chosen Usage Examples'
  };

  List: any[] = [
    {
      id: 'tab-collect-data',
      title: 'Collect Data',
      active: true,
      subtitle: 'Collect Accurate Data',
      image: './assets/images/usage/5.png',
      tabImage : './assets/images/about-us/13.png',
      desc: [ 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!' ],
      checklist: ['Boost Seo ranking','Marketing','Social Sharing']
    },
    {
      id: 'tab-identifytrends',
      title: 'IdentifyTrends',
      subtitle: 'IdentifyTrends',
      image: './assets/images/usage/4.png',
      
    },
    {
      id: 'tab-understand',
      title: 'Understand',
      subtitle: 'Understand',
      image: './assets/images/usage/3.png',
      
    },
    {
      id: 'tab-goals-hypotheses',
      title: 'Goals & Hypotheses',
      subtitle: 'Goals & Hypotheses',
      image: './assets/images/usage/2.png',
      
    },
    {
      id: 'tab-take-action',
      title: 'Take Action',
      subtitle: 'Take Action',
      image: './assets/images/usage/1.png',
    }
  ];

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tab-content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }
  constructor() { }

  ngOnInit() {
  }

}
