import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-portfolio-five',
  templateUrl: './portfolio-five.component.html',
})

export class PortfolioFiveComponent implements OnInit {


  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Portfolio 5 Columns",
    img:"04.png"
  };

  List: any[] = [
    {
      class : 'video',
      href: '#',
      img: '08.png',
      title:'Business Growth',
      type:'Video'
    },
    {
      class : 'html',
      href: '#',
      img: '02.png',
      title:'Business Growth',
      type:'Html'
    },
    {
      class : 'html',
      href: '#',
      img: '03.png',
      title:'Business Growth',
      type:'Html'
    },
    {
      class : 'design',
      href: '#',
      img: '08.png',
      title:'Business Growth',
      type:'Design'
    },
    {
      class : 'photography',
      href: '#',
      img: '01.png',
      title:'Business Growth',
      type:'Photography'
    },
    {
      class : 'photography',
      href: '#',
      img: '08.png',
      title:'Business Growth',
      type:'Design, Photography'
    },
    {
      class : 'design photography',
      href: '#',
      img: '03.png',
      title:'Business Growth',
      type:'Design, Photography'
    },
    {
      class : 'design',
      href: '#',
      img: '02.png',
      title:'Business Growth',
      type:'Design'
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
