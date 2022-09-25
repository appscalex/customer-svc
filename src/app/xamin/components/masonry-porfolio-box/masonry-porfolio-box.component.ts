import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-masonry-porfolio-box',
  templateUrl: './masonry-porfolio-box.component.html',
})
export class MasonryPorfolioBoxComponent implements OnInit {

  @Input() portfolioList: any[] ;

  constructor() { }

  ngOnInit() {
  }

}
