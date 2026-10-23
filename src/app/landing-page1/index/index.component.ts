import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [`
    .ax-hero-wrapper {
      padding: 130px 0 80px 0;
      position: relative;
    }
    .ax-tab-fade {
      animation: fadeIn 0.3s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };

  public navItems: any = topMenuBarItems;

  // Hero Interactive Tabs
  activeHeroTab: string = 'pipeline';

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  setHeroTab(tab: string) {
    this.activeHeroTab = tab;
  }
}
