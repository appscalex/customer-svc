import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-counter',
  templateUrl: './client-counter.component.html',
})
export class ClientCounterComponent implements OnInit {

  list: any[] = [
    {
      value: 1520,
      icon: 'ion ion-android-sad',
      text: 'Happy Clients'
    },
    {
      value: 2000,
      icon: 'fa fa-handshake-o',
      text: 'Completed Projects'
    },
    {
      value: 150,
      icon: 'ion ion-ios-contact-outline',
      text: 'Team Members'
    },
    {
      value: 750,
      icon: 'ion ion-android-checkmark-circle',
      text: 'Questions Answered'
    }
  ];

  style: string = 'style2';

  constructor() { }

  ngOnInit() {
  }

}
