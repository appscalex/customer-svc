import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() logoId: boolean;
  @Input() logoImg: string;
  @Input() navItemList: any[];
  @Input() contactInfo: any;
  @Input() headeClass: string;
  constructor() { }

  ngOnInit() {
  }

}
