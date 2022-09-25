import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-box',
  templateUrl: './portfolio-box.component.html'
})
export class PortfolioBoxComponent implements OnInit {

  @Input() portfolioList:any[];
  constructor() { }

  ngOnInit() {
  }

}
