import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp1: any = {
    title: 'About US',
    subTitle: 'Human Behaviour, Data Science',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted many desktop.',
    class: 'text-left'
  };

  titleSectionProp2: any = {
    title: 'About US',
    subTitle: 'Focused on Actionable Insights',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted many desktop.',
    class: 'text-left'
  };

  checkList1: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList2: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];

  constructor() { }

  ngOnInit() {
  }

}
