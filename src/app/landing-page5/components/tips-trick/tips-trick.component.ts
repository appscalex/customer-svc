import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick',
  templateUrl: './tips-trick.component.html'
})
export class TipsTrickComponent implements OnInit {

  titleSectionProp1: any = {
    class: 'text-left',
    subTitle: 'Business Benefits',
    description: 'Based on the analysis, Flash Infra create a detailed plan which helps the organization to adopt the DevOps strategy.'
  };

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'Operational Benefits',
    description: 'Companies that incorporate Flash Infra practices can deliver with maximum speed, functionality, and innovation.'
  };

  List1: any[] = ['Faster delivery of new features', 'Better release control & versioning', 'More frequent software releases', 'Better development velocity',
    'Reduce Time for Action', 'Reduced IT Costs'];
  List2: any[] = ['Increase Business Efficiency', 'Improve Response Time', 'Reduced Cost over time', 'Improve Business Agility',
    'Better Employee Productivity & Satisfaction', 'Increase Customer Satisfaction'];
  constructor() { }

  ngOnInit() {
  }

}
