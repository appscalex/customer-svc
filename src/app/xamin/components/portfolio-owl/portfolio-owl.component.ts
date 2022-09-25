import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-owl',
  templateUrl: './portfolio-owl.component.html'
})
export class PortfolioOwlComponent implements OnInit {

  @Input() List: any[];

  constructor() { }

  ngOnInit() {
  }

}
