import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html'
})
export class CaseStudiesComponent implements OnInit {
  
  titleSectionProp: any = {
    class: 'text-center',
    title: 'CASE STUDIES',
    subTitle: 'Our Latest Case Studies'
  };
 
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
