import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BLOG_DETAILS } from 'src/app/blog/blogs';

@Component({
  selector: 'app-blog-pagination',
  templateUrl: './blog-pagination.component.html',
})
export class BlogPaginationComponent implements OnInit {

  id: string = "";
  details: any;

  constructor( private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.fetchDetails();
   });

   }

  ngOnInit() {
  }

  fetchDetails() : void {
    BLOG_DETAILS.forEach(blog => {
       if (this.id == blog.id) {
          this.details = blog;
       }  
    });

  }

}
