import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-dazzle',
  templateUrl: './data-dazzle.component.html'
})
export class DataDazzleComponent implements OnInit {

  List: any[] = [
    {
      title: 'Infographics',
      icon: 'fa fa-database',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Social media visuals',
      icon: 'fa fa-database',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Dashboards',
      icon: 'fa fa-database',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Maps',
      icon: 'fa fa-database',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
