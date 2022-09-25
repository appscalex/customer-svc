import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html'
})
export class PartnerComponent implements OnInit {

  List: any[] = [
    {
      title: 'Onduo by Google',
      subtitle: 'Defined brand style guide and created narrative illustrations.',
      image: './assets/images/partners/1.png'
    },
    {
      title: 'Titan Eye Plus',
      subtitle: 'Defined brand style guide and created narrative illustrations.',
      image: './assets/images/partners/3.png'
    },
    {
      title: 'DHL',
      subtitle: 'Defined brand style guide and created narrative illustrations.',
      image: './assets/images/partners/4.png'
    },
    {
      title: 'Cake Browser',
      subtitle: 'Defined brand style guide and created narrative illustrations.',
      image: './assets/images/partners/2.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
