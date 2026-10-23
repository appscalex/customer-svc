import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-quality-engineering',
  templateUrl: './quality-engineering.component.html'
})
export class QualityEngineeringComponent implements OnInit {
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
