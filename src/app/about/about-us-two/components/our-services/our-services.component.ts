import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html'
})
export class OurServicesComponent implements OnInit {

  List: any[] = [
    { title: 'One Platform', image: './assets/images/services/01.png', desc: 'It aims at merging development, quality assurance, and operations into a single, continuous set of processes.' },
    { title: 'Innovation', image: './assets/images/services/02.png', desc: 'Innovation is the key to attracting customers and keeping them satisfied. Bringing something new to the table is important.' },
    { title: 'Lower Costs', image: './assets/images/services/03.png', desc: 'Cost is a major factor in consumer satisfaction. Nobody wants to feel like they are paying for a service that does not satisfy them.' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
