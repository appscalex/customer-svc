import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  @Input() List : any[];
  @Input() style : any[];

  @Input() videoDetail: any;

  constructor() { }

  ngOnInit() {
  }

}
