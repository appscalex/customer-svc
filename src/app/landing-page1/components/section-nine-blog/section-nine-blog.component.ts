import { Component, OnInit } from '@angular/core';

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

  List: any[] = [
    {
      img: './assets/images/about-us/02.png',
      name: 'Cloud',
      time: 'September 26, 2019 ',
      title: 'DevOps Unbound',
      desc: 'Performance testing allows DevOps teams to check the speed, scalability and stability of the apps to ensure that everything is working as planned under the designated workload.',
    },
    {
      img: './assets/images/about-us/03.png',
      name: 'Devops',
      time: 'September 26, 2019 ',
      title: 'The Real Pipeline',
      desc: 'The business unit determines what they want to offer, customers let their demands be known (one way or another) and the business offers the solution they think fits for the customers.',
    },
    {
      img: './assets/images/about-us/04.png',
      name: 'Infrastrcture',
      time: 'September 26, 2019 ',
      title: 'Empower Your Developers',
      desc: 'In recent years, the demand for software developers worldwide has increased. However, in 2020, when the pandemic hit, many CIOs pulled back considerably on their IT spending.',
    },
    {
      img: './assets/images/about-us/05.png',
      name: 'Infrastrcture',
      time: 'September 26, 2019 ',
      title: 'AI-Augmented DevOps',
      desc: 'While artificial intelligence (AI) and machine learning (ML) are emerging technologies, we know they can help an organization parse large data sets and glean actionable insights.',
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
