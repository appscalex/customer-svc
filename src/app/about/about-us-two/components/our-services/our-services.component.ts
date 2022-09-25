import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html'
})
export class OurServicesComponent implements OnInit {

  List: any[] = [
    { title: 'Data for all people', image: './assets/images/services/01.png', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'A new breed of AI', image: './assets/images/services/02.png', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Analytics business', image: './assets/images/services/03.png', desc: 'There are many variations of passages of Lorem Ipsum available.'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
