import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-blog-two-column',
  templateUrl: './blog-two-column.component.html',
})
export class BlogTwoColumnComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Two Column Blog",
    img:"04.png"
  };
  grid : string = "6";

  List: any[] = [
    {
      img: './assets/images/about-us/02.png',
      name:  'HTML',
      time: 'September 26, 2019 ',
      title: 'Build Construction',
      desc: '“They bring to you a host of beautifully created infographics that contain the latest digital marketing ',
    },
    {
      img: './assets/images/about-us/03.png',
      name:  'Design',
      time: 'September 26, 2019 ',
      title: 'Life Lack Meaning',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/about-us/04.png',
      name:  'HTML',
      time: 'September 26, 2019 ',
      title: 'Construction industry',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing',
    },
    {
      img: './assets/images/about-us/05.png',
      name:  'CSS',
      time: 'September 26, 2019 ',
      title: 'Content Marketing',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
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
