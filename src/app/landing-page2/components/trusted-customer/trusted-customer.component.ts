import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trusted-customer',
  templateUrl: './trusted-customer.component.html',
})
export class TrustedCustomerComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'TRUSTED',
    subTitle: 'Our Customers Get Results',
    description: ''
  };

  List : any[] = [
    {
      image1:  '1.png',
      image2:  '3.png',
    },
    {
      image1:  '2.png',
      image2:  '4.png',
    },
    {
      image1:  '3.png',
      image2:  '5.png',
    },
    {
      image1:  '4.png',
      image2:  '1.png',
    },
    {
      image1:  '5.png',
      image2:  '2.png',
    },
    {
      image1:  '1.png',
      image2:  '5.png',
    },

  ];

  hover : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
