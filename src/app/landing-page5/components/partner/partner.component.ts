import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html'
})
export class PartnerComponent implements OnInit {

  List: any[] = [
    {
      title: 'Byte Helathcare',
      subtitle: 'Byte Helathcare is a digital health brand that is designed to help people with chronic conditions.',
      image: './assets/images/partners/1.png'
    },
    {
      title: 'EyeCare True',
      subtitle: 'EyeCare True is a digital vision care service provider that brings technology to eye doctors and patients',
      image: './assets/images/partners/3.png'
    },
    {
      title: 'Kindle Mail',
      subtitle: 'Kindle Mail is a logistics company providing courier, package delivery and express mail service.',
      image: './assets/images/partners/4.png'
    },
    {
      title: 'Newstar',
      subtitle: 'Newstar is a e-commerce platform for online stores and retail point-of-sale systems.',
      image: './assets/images/partners/2.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
