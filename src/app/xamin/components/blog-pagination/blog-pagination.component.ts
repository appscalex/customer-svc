import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BLOG_DETAILS } from 'src/app/blog/blogs';

@Component({
  selector: 'app-blog-pagination',
  templateUrl: './blog-pagination.component.html',
})
export class BlogPaginationComponent implements OnInit {

  id: number = 1;
  details: any;

  constructor( private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
   });

   }

  ngOnInit() {
  }

}
