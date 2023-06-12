import { Component, OnInit } from '@angular/core';
import { BLOG_DETAILS } from 'src/app/blog/blogs';

@Component({
  selector: 'app-blog-recent-post',
  templateUrl: './blog-recent-post.component.html',
})
export class BlogRecentPostComponent implements OnInit {

  List: any[] = BLOG_DETAILS.slice(6);

  constructor() { }

  ngOnInit() {
  }

}
