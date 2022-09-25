import { Component, OnInit } from '@angular/core';
import { PluginsService } from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com',
    address: '1234 North Avenue Luke Lane, South Bend, IN 360001'
  };

  footerProp: any = {
    class: 'iq-over-dark-90',
    logoImg: './assets/images/logo.png',
    email: 'support@iqnonicthemes.com',
    description: 'It is a long established fact that a reader will be distracted by the readable content.',
  };

  constructor(private plugins: PluginsService) { }

  public navItems: any = topMenuBarItems;

  ngOnInit() {
    // Init all plugins...
    const current = this;
    current.plugins.revolutionSlider();
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
