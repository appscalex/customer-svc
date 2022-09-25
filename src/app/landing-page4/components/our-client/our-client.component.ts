import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html'
})
export class OurClientComponent implements OnInit {

  List1: any[] = [
    { title: 'Microsoft Partner of the Year Award', image: './assets/images/awards/1.png' },
    { title: 'Global Sourcing Awards 2018 Finalist', image: './assets/images/awards/2.png' },
    { title: 'Gold Winner of 2013 Horizon Awards', image: './assets/images/awards/3.png' },
    { title: 'European Software Testing Awards Finalist', image: './assets/images/awards/4.png' }
  ];

  List2: any[] = [
    { title: 'Microsoft Partner of the Year Award', image: './assets/images/awards/5.png' },
    { title: 'Global Sourcing Awards 2018 Finalist', image: './assets/images/awards/1.png' },
    { title: 'Gold Winner of 2013 Horizon Awards', image: './assets/images/awards/2.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
