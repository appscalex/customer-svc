import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-recent-post',
  templateUrl: './blog-recent-post.component.html',
})
export class BlogRecentPostComponent implements OnInit {

  List: any[] = [
    {
      img: '02.png',
      name: 'Cloud',
      time: 'September 26, 2019 ',
      title: 'The Real Pipeline',
    },
    {
      img: '03.png',
      name: 'Infrastrcture',
      time: 'September 26, 2019 ',
      title: 'AI-Augmented DevOps',
    },
    {
      img: '04.png',
      name: 'Cloud',
      time: 'September 26, 2019 ',
      title: 'Empower Your Developers',
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
