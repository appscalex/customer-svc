import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+19168084228',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'Contact us',
    img: '04.png'
  };

  List: any[] = [
    {
      title: 'USA Office',
      address: '10231 Redwood Blvd 100, Oakland, CA 94605, USA'
    },
    {
      title: 'India Office',
      address: '12th Cross Rd, Koramangala, Bengaluru, Karnataka 560085, India'
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
