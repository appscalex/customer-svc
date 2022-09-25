import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html'
})
export class OurClientComponent implements OnInit {

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
