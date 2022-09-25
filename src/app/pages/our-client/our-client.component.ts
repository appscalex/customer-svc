import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html',
})
export class OurClientComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Clients",
    img:"04.png"
  };

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR CLIENTS',
    subTitle: 'All Our Great Clients',
    description:''
  };

  List: any[] =  [
    {
      img:  "1.png",
    }, {
      img:  "2.png",
    }, {
      img:  "4.png",
    }, {
      img:  "5.png",
    }, {
      img:  "1.png",
    }, {
      img:  "2.png",
    }, {
      img:  "3.png",
    }, {
      img:  "4.png",
    }, {
      img:  "5.png",
    }, {
      img:  "1.png",
    }, {
      img:  "3.png",
    }, {
      img:  "2.png",
    }, {
      img:  "4.png",
    }, {
      img:  "1.png",
    }, {
      img:  "2.png",
    }, {
      img:  "3.png",
    }, {
      img:  "5.png",
    }, {
      img:  "4.png",
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
