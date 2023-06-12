import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-blog-left-two-grid',
  templateUrl: './blog-left-two-grid.component.html',
})
export class BlogLeftTwoGridComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-8638386533',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'Left sidebar grid 2',
    img: '04.png'
  };

  grid = '6';

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

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
