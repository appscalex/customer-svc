import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
})
export class BlogCategoryComponent implements OnInit {

  List :any[] = [
      {
        title:"CSS",
        count:2
      },
      {
        title:"Design",
        count:3
      },
      {
        title:"HTML",
        count:2
      },
      {
        title:"Uncategorized",
        count:1
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
