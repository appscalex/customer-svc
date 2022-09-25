import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-about-us-two',
  templateUrl: './about-us-two.component.html'
})
export class AboutUsTwoComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"About Us Two",
    img:"04.png"
  };

  titleSectionProp: any = {
    title: 'ABOUT US',
    subTitle: 'Human Behaviour, Data Science',
    description: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.'
  };

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
