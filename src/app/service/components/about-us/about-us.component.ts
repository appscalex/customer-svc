import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    title: 'ABOUT XAMIN',
    subTitle: 'Why Choose People Xamin',
    description: ''
  };

  List : any[] = [
    {
      img:"01.png",
      title:"Perfect Event",
      desc:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter"

    },
    {
      img:"02.png",
      title:"Perfect Event",
      desc:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter"

    },
    {
      img:"02.png",
      title:"Perfect Event",
      desc:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter"

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
