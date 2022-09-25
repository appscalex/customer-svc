import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
})
export class WhyChooseUsComponent implements OnInit {

  List : any ={
    title:"WHY CHOOSE US",
    subtitle : "Why Choose People Xamin",
    desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
  };
  constructor() { }

  ngOnInit() {
  }

}
