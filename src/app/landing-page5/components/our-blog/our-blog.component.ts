import { Component, OnInit } from '@angular/core';
import { BLOG_DETAILS } from 'src/app/blog/blogs';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'BLOGS',
    subTitle: 'Recent Blogs',
    desc: ''
  };

  List: any[] =  BLOG_DETAILS ;

  constructor() { }

  ngOnInit() {
  }

}
