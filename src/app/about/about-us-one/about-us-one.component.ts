import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-about-us-one',
  templateUrl: './about-us-one.component.html',
})

export class AboutUsOneComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"About us",
    img:"04.png"
  };

  titleSectionProp: any = {
    title: 'ABOUT US',
    subTitle: 'Human Behaviour, Data Science',
    description: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.'
  };

  Lists: any = {
    isOuter: false,
    img: '06.png',
    chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
  };

  cardData: any[] = [
    {
      title : "Data for all people",
      desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      title : "A new breed of AI",
      desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      title : "Analytics business",
      desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
