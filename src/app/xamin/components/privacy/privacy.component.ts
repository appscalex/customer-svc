import { Component, Input, OnInit } from '@angular/core';
import { PluginsService } from '../../plugins.service';
import { topMenuBarItems } from '../../../../constants/menu';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html'
})
export class PrivacyComponent implements OnInit {

  @Input() List: any[];
  @Input() titleSectionProp: any[];
  navItems: any = topMenuBarItems;

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };

  activeSection: string = 'section-1';

  constructor(private plugins: PluginsService) {}

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.activeSection = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
