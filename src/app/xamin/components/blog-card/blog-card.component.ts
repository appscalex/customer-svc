import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent implements OnInit {

  @Input() grid: string;
  @Input() List: any[];

  constructor() { }

  ngOnInit() {
  }

}
