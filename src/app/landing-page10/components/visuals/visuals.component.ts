import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visuals',
  templateUrl: './visuals.component.html'
})
export class VisualsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: '',
    subTitle: 'Get and blend data from multiple sources',
    description: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
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
