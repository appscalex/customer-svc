import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-nine-blog',
  templateUrl: './section-nine-blog.component.html',
})
export class SectionNineBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'BLOG',
    subTitle: 'Recent Blog',
  };

  List: any[] = [
    {
      img: './assets/images/blog/1.png',
      name: 'HTML',
      time: 'September 26, 2019 ',
      title: 'Build Construction',
      desc: '“They bring to you a host of beautifully created infographics that contain the latest digital marketing ',
    },
    {
      img: './assets/images/blog/2.png',
      name: 'Design',
      time: 'September 26, 2019 ',
      title: 'Life Lack Meaning',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/blog/3.png',
      name: 'HTML',
      time: 'September 26, 2019 ',
      title: 'Construction industry',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing',
    },
    {
      img: './assets/images/blog/4.png',
      name: 'CSS',
      time: 'September 26, 2019 ',
      title: 'Content Marketing',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
