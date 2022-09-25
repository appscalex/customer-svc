import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-tricks',
  templateUrl: './tips-tricks.component.html'
})
export class TipsTricksComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
  };

  List: any[] = [
    {
      title: 'Data Visualization Practices to Improve',
      icon: 'fa fa-database',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Focused on Actionable Insights',
      icon: 'fa fa-align-left',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
