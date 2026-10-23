import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../xamin/plugins.service';
import { topMenuBarItems } from '../../constants/menu';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html'
})
export class PricingPageComponent implements OnInit {
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  openFaq: number | null = 0;

  constructor(private plugins: PluginsService) {}

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  toggleFaq(index: number) {
    this.openFaq = this.openFaq === index ? null : index;
  }
}
