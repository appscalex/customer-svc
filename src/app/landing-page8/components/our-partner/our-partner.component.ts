import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html'
})
export class OurPartnerComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'TRUSTED BY OVER 26,000 FORWARD - THINKING COMPANIES ',
  };

  List : any[] = [
    {
      img:  '1.png',
    },
    {
      img:  '2.png',
    },
    {
      img:  '3.png',
    },
    {
      img:  '4.png',
    },
    {
      img:  '1.png',
    },
    {
      img:  '2.png',
    }
  ];
  
  hover : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
