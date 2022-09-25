import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-six-projects',
  templateUrl: './section-six-projects.component.html'
})
export class SectionSixProjectsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR PROJECTS',
    subTitle: 'Projects in Different Domain of Industry'
  };

  portfolioList1: any[] = [
    {
      class: 'video',
      href: 'portfolio-details.html',
      img: '01.png',
      title: 'Business Growth',
      type: 'Video'
    },
    {
      class: 'html',
      href: 'portfolio-details.html',
      img: '03.png',
      title: 'Business Growth',
      type: 'HTML'
    },
    {
      class: 'html',
      href: 'portfolio-details.html',
      img: '04.png',
      title: 'Business Growth',
      type: 'HTML'
    },
    {
      class: 'design',
      href: 'portfolio-details.html',
      img: '05.png',
      title: 'Business Growth',
      type: 'Design'
    },
    {
      class: 'photography',
      href: 'portfolio-details.html',
      img: '04.png',
      title: 'Business Growth',
      type: 'Photography'
    },
    {
      class: 'photography',
      href: 'portfolio-details.html',
      img: '03.png',
      title: 'Business Growth',
      type: 'Photography'
    },
    {
      class: 'design photography',
      href: 'portfolio-details.html',
      img: '02.png',
      title: 'Business Growth',
      type: 'Photography'
    },
    {
      class: 'design',
      href: 'portfolio-details.html',
      img: '01.png',
      title: 'Business Growth',
      type: 'Design'
    }
  ];

  portfolioList2: any[] = [
    {
      class: 'design',
      href: 'portfolio-details.html',
      img: '05.png',
      title: 'Business Growth',
      type: 'Design'
    },
    {
      class: 'design photography',
      href: 'portfolio-details.html',
      img: '02.png',
      title: 'Business Growth',
      type: 'Photography'
    },
    {
      class: 'design',
      href: 'portfolio-details.html',
      img: '01.png',
      title: 'Business Growth',
      type: 'Design'
    }
  ];

  portfolioList3: any[] = [
    {
      class: 'html',
      href: 'portfolio-details.html',
      img: '03.png',
      title: 'Business Growth',
      type: 'HTML'
    },
    {
      class: 'html',
      href: 'portfolio-details.html',
      img: '04.png',
      title: 'Business Growth',
      type: 'HTML'
    }
  ];

  portfolioList4: any[] = [
    {
      class: 'photography',
      href: 'portfolio-details.html',
      img: '04.png',
      title: 'Business Growth',
      type: 'Photography'
    },
    {
      class: 'photography',
      href: 'portfolio-details.html',
      img: '03.png',
      title: 'Business Growth',
      type: 'Photography'
    },
    {
      class: 'design photography',
      href: 'portfolio-details.html',
      img: '02.png',
      title: 'Business Growth',
      type: 'Photography'
    }
  ];

  portfolioList5: any[] = [
    {
      class: 'video',
      href: 'portfolio-details.html',
      img: '01.png',
      title: 'Business Growth',
      type: 'Video'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
