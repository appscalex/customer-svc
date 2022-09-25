import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
})
export class AboutCardComponent implements OnInit {

  @Input() cardData: any[];
  constructor() { }

  ngOnInit() {
  }

}
