import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    title: 'ABOUT ME',
    subTitle: 'I\'m Professional Data Scientist having 10 Years Of Experience',
    description: 'Consectetur fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
  };

  constructor() { }

  ngOnInit() {
  }

}
