import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-owl',
  templateUrl: './blog-owl.component.html',
})
export class BlogOwlComponent implements OnInit {

  @Input() List: any[];
  @Input() navigation: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
