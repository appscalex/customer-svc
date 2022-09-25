import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html'
})
export class BrandsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Brands',
    subTitle: 'Trusted by the world\'s largest brands.',
  };

  List: any[] = [
    {
      image: './assets/images/partners/1.png'
    },
    {
      image: './assets/images/partners/2.png'
    },
    {
      image: './assets/images/partners/3.png'
    },
    {
      image: './assets/images/partners/4.png'
    },
    {
      image: './assets/images/partners/5.png'
    },
    {
      image: './assets/images/partners/1.png'
    },
    {
      image: './assets/images/partners/2.png'
    },
    {
      image: './assets/images/partners/3.png'
    },
    {
      image: './assets/images/partners/4.png'
    },
    {
      image: './assets/images/partners/5.png'
    },
    {
      image: './assets/images/partners/1.png'
    },
    {
      image: './assets/images/partners/2.png'
    },
    {
      image: './assets/images/partners/3.png'
    },
    {
      image: './assets/images/partners/4.png'
    },
    {
      image: './assets/images/partners/5.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
