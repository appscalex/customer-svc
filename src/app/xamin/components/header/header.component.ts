import { Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() logoId: boolean;
  @Input() logoImg: string;
  @Input() navItemList: any[];
  @Input() contactInfo: any;
  @Input() headeClass: string;

  isNavCollapsed: boolean = true;
  activeMobileSubmenu: string | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  toggleNav(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isNavCollapsed = !this.isNavCollapsed;
    if (this.isNavCollapsed) {
      this.activeMobileSubmenu = null;
    }
  }

  closeNav(): void {
    this.isNavCollapsed = true;
    this.activeMobileSubmenu = null;
  }

  handleNavClick(option: any, event: Event): void {
    if (option.submenu && option.submenu.length > 0) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      // Accordion toggle: if currently open, close it; otherwise close previous and open this one
      this.activeMobileSubmenu = this.activeMobileSubmenu === option.title ? null : option.title;
    } else {
      this.closeNav();
    }
  }

  isSubmenuOpen(title: string): boolean {
    return this.activeMobileSubmenu === title;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isNavCollapsed && this.elementRef && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeNav();
    }
  }
}
