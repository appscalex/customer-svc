import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../xamin/plugins.service';
import { topMenuBarItems } from '../../constants/menu';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html'
})
export class FeaturesPageComponent implements OnInit {
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  selectedCategory: string = 'all';

  constructor(private plugins: PluginsService) {}

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  setCategory(cat: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.selectedCategory = cat;
    if (cat !== 'all') {
      const el = document.getElementById(cat);
      if (el) {
        const yOffset = -120;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const grid = document.getElementById('features-catalog');
      if (grid) {
        const yOffset = -120;
        const y = grid.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }
}
