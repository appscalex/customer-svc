import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../plugins.service';
import { topMenuBarItems } from '../../../../constants/menu';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html'
})
export class TermsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };

  public navItems: any = topMenuBarItems;
  activeTerm: string = 'term-1';

  constructor(private plugins: PluginsService) {}

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  scrollToTerm(termId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.activeTerm = termId;
    const el = document.getElementById(termId);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
