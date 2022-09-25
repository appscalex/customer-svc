import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
})
export class ChooseUsComponent implements OnInit {
  @Input() lists: any[];
  constructor() { }

  ngOnInit() {
  }

}
