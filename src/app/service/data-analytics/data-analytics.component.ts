import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html'
})
export class DataAnalyticsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Data Analytics",
    img:"05.png"
  };

  public activeMenu = '/services/data-analytics';

  images: any[] = [
    { image: "./assets/images/about-us/04.png" },
    { image: "./assets/images/about-us/03.png" },
    { image: "./assets/images/about-us/04.png" },
    { image: "./assets/images/about-us/03.png" },
    { image: "./assets/images/about-us/04.png" },
    { image: "./assets/images/about-us/03.png" },
    { image: "./assets/images/about-us/04.png" }
  ];

  className= " ";

  checkList1: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList2: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList3: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
