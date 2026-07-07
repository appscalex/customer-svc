import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435187656',
    email: 'support@appscalex.com',
    address: '123, Arlington Court, Clover Village, Wanowrie, Pune 411040'
  };

  footerProp: any = {
    class: 'iq-over-dark-90',
    logoImg: './assets/images/logo.png',
    email: 'support@appscalex.com',
    description: 'The most powerful tool we have as developers is automation.',
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
