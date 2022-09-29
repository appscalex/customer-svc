import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
})
export class BlogSliderComponent implements OnInit {

  List: any[] = [
    {
      img: '2.jpg',
      name: 'Walhan Bobe',
      designation: 'Head Of Engineering',
      desc: 'Our AWS (Amazon Web Services) bill was cut by 30% when services started using auto-scaling Terraform modules.'
    },
    {
      img: '1.jpg',
      name: 'Michele White',
      designation: 'CEO',
      desc: 'You want to start with low hanging fruits to feel the wins quickly. This is a great way to find out more about the world you’re getting into.'
    },
    {
      img: '3.jpg',
      name: 'Mark McManus',
      designation: 'COO',
      desc: 'Since we have decreased the risk by using Blue/Green deployment strategies, we are able to do deployments during the day and not have to work late nights as frequently.'
    }
  ];

  @Input() className: string;

  constructor() { }

  ngOnInit() {
  }

}
