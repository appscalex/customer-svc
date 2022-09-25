import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {

  titleSectionProp: any = {
    title: 'LETS GET STARTED',
    subTitle: 'Are you ready for a better, more productive business?',
    description: ''
  };

  Lists: any = {
    isOuter: true,
    img: '11.png',
    desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English."
  };
  constructor() { }

  ngOnInit() {
  }

}
