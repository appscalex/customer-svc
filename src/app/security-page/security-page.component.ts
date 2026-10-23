import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../xamin/plugins.service';
import { topMenuBarItems } from '../../constants/menu';

@Component({
  selector: 'app-security-page',
  templateUrl: './security-page.component.html'
})
export class SecurityPageComponent implements OnInit {
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  constructor(private plugins: PluginsService) {}

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
