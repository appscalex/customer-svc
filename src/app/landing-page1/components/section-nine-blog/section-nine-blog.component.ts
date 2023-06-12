import { Component, OnInit } from '@angular/core';
import { BLOG_DETAILS } from 'src/app/blog/blogs';

@Component({
  selector: 'app-section-nine-blog',
  templateUrl: './section-nine-blog.component.html',
})
export class SectionNineBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'BLOGS',
    subTitle: 'Recent Blogs',
  };

  List: any[] =  BLOG_DETAILS ;

  constructor() { }

  ngOnInit() {
  }

}
