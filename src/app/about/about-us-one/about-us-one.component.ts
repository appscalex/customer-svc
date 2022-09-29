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
    subTitle: 'Infrastructure and Deployment',
    description: 'The most powerful tool for devops.'
  };

  Lists: any = {
    isOuter: false,
    img: '06.png',
    chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
  };

  cardData: any[] = [
    {
      title: 'One Platform',
      desc: 'It aims at merging development, quality assurance, and operations into a single, continuous set of processes.'
    },
    {
      title: 'Innovation',
      desc: 'Innovation is the key to attracting customers and keeping them satisfied. Bringing something new to the table is important.'
    },
    {
      title: 'Lower Costs',
      desc: 'Cost is a major factor in consumer satisfaction. Nobody wants to feel like they are paying for a service that does not satisfy them.'
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
