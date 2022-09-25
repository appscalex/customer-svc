import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html'
})
export class AboutUs1Component implements OnInit {

titleSectionProp: any = {
    class: 'text-left',
    title: 'LETS GET STARTED ',
    subTitle: 'Are you ready for a better, more productive business?',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
  };

  constructor() { }

  ngOnInit() {
  }

}
