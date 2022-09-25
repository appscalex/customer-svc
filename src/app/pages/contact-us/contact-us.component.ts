import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Contact us",
    img:"04.png"
  };

  List : any[] =[
    {
      title:"USA Office",
      address:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
    },
    {
      title:"Australia Office",
      address:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
    },
    {
      title:"New zealand Office",
      address:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
    }

  ]

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
