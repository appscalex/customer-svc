import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specializing',
  templateUrl: './specializing.component.html'
})
export class SpecializingComponent implements OnInit {

  titleSectionProp: any = {
    class: 'mb-0 text-center text-lg-left border-right',
    subTitle: 'Specializing in'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
