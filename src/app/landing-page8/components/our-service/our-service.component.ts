import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html'
})
export class OurServiceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Our Services',
    subTitle: 'We Provide Useful Services',
  };
  
  constructor() { }

  ngOnInit() {
  }

}
