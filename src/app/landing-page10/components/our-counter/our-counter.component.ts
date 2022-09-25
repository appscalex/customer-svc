import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-counter',
  templateUrl: './our-counter.component.html'
})
export class OurCounterComponent implements OnInit {

  List: any[] = [
    { title: 'Trading Volume(USD)', number: '50', icon: 'flaticon flaticon-cost'},
    { title: 'Data Transactions', number: '20', icon: 'flaticon flaticon-planning'},
    { title: 'Our Happy Users', number: '10', icon: 'flaticon flaticon-customer'},
    { title: 'Custom Portfolios Created', number: '200', icon: 'flaticon flaticon-cost'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
