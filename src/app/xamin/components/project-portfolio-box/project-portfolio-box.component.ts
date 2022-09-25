import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-portfolio-box',
  templateUrl: './project-portfolio-box.component.html',
})
export class ProjectPortfolioBoxComponent implements OnInit {

  portfolioList: any[] = [
    {
      class : 'video',
      href: '#',
      img: './assets/images/about-us/01.png',
      title: 'Business Growth',
      type: 'Video'
    },
    {
      class: 'html',
      href: '#',
      img: './assets/images/about-us/02.png',
      title: 'Business Growth',
      type: 'HTML'
    },
    {
      class : 'design video',
      href: '#',
      img: './assets/images/about-us/03.png',
      title: 'Business Growth',
      type: 'Design, Video'
    },
    {
      class : 'photography',
      href: '#',
      img: './assets/images/about-us/04.png',
      title: 'Business Growth',
      type: 'Photography'
    },
    {
      class : 'design photography',
      href: '#',
      img: './assets/images/about-us/01.png',
      title: 'Business Growth',
      type: 'Design, Photography'
    },
    {
      class : 'design photography',
      href: '#',
      img: './assets/images/about-us/02.png',
      title: 'Business Growth',
      type: 'Design, Photography'
    },
    {
      class : 'design',
      href: '#',
      img: './assets/images/about-us/03.png',
      title: 'Business Growth',
      type: 'Design'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
