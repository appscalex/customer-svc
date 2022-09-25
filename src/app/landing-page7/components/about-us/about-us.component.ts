import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  checkList1: any[] = [
    'Polarity: if the speaker express a positive or negative opinion,',
    'Subject: the thing that is being talked about',
    'Opinion holder: the person, or entity that expresses the opinion.'
  ]
  constructor() { }

  ngOnInit() {
  }

}
