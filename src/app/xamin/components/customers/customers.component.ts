import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {

  @Input() List: any[];

  @Input() hover : boolean;

  constructor() { }

  ngOnInit() {
  }

}
