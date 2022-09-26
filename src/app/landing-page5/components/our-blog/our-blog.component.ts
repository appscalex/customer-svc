import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'BLOGS',
    subTitle: 'Recent Blogs',
    desc: 'It is a long established fact that a reader will be distracted'
  };

  List: any[] = [
    {
      img: './assets/images/about-us/02.png',
      name: 'Cloud',
      time: 'September 26, 2019 ',
      title: 'Build Construction',
      desc: '“They bring to you a host of beautifully created infographics that contain the latest digital marketing ',
    },
    {
      img: './assets/images/about-us/03.png',
      name: 'Devops',
      time: 'September 26, 2019 ',
      title: 'Life Lack Meaning',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/about-us/04.png',
      name: 'Infrastrcture',
      time: 'September 26, 2019 ',
      title: 'Construction industry',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing',
    },
    {
      img: './assets/images/about-us/05.png',
      name: 'Infrastrcture',
      time: 'September 26, 2019 ',
      title: 'Content Marketing',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
