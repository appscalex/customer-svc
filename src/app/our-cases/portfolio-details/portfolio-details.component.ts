import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
})
export class PortfolioDetails implements OnInit {


  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Portfolio Details",
    img:"04.png"
  };

  List: any[] = [
    {
      img: '01.png',
      title:'Business Growth',
      type:'HTML',
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
