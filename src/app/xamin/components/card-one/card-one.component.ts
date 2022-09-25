import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
})
export class CardOneComponent implements OnInit {
  @Input() List : any[];
  constructor() { }

  ngOnInit() {
  }

}
