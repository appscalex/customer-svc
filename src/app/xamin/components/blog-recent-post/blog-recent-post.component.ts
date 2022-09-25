import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-recent-post',
  templateUrl: './blog-recent-post.component.html',
})
export class BlogRecentPostComponent implements OnInit {

  List: any[] = [
    {
      img:  "02.png",
      name:  "HTML",
      time: "September 26, 2019 ",
      title: "Build Construction",
    },
    {
      img:  "03.png",
      name:  "Design",
      time: "September 26, 2019 ",
      title: "Life Lack Meaning",
    },
    {
      img:  "04.png",
      name:  "HTML",
      time: "September 26, 2019 ",
      title: "Construction industry",
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
