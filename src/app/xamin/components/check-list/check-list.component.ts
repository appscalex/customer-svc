import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html'
})
export class CheckListComponent implements OnInit {
  @Input() lists: any[];
  constructor() { }

  ngOnInit() {
  }

}
