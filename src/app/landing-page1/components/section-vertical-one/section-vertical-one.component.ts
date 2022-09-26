import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-one',
  templateUrl: './section-vertical-one.component.html'
})

export class SectionVerticalOneComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'About us',
    subTitle: 'Focused on Actionable Insights',
    // tslint:disable-next-line:max-line-length
    description: 'The most powerful tool we have as developers is automation.'
  };

  // tslint:disable-next-line:max-line-length
  lists: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service &amp; Operations'];

  constructor() { }

  ngOnInit() {
  }

}
