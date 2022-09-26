import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-about-us-one',
  templateUrl: './about-us-one.component.html',
})

export class AboutUsOneComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+19168084228',
    email: 'support@flashinfra.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'About us',
    img: '04.png'
  };

  titleSectionProp: any = {
    title: 'ABOUT US',
    subTitle: 'Human Behaviour, Data Science',
    description: 'The most powerful tool we have as developers is automation.'
  };

  Lists: any = {
    isOuter: false,
    img: '06.png',
    chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
  };

  cardData: any[] = [
    {
      title: 'Data for all people',
      desc: 'The most powerful tool we have as developers is automation.'
    },
    {
      title: 'A new breed of AI',
      desc: 'The most powerful tool we have as developers is automation.'
    },
    {
      title: 'Analytics business',
      desc: 'The most powerful tool we have as developers is automation.'
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
