import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-project',
  templateUrl: './our-project.component.html'
})
export class OurProjectComponent implements OnInit {

  
  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR PROJECTS',
    subTitle: 'Projects in Different Domain of Industry'
  };

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
