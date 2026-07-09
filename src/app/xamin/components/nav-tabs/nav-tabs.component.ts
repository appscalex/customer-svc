import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html'
})
export class NavTabsComponent implements OnInit {

  @Input() navList: any[];

  activeId: string = '';

  constructor() { }

  ngOnInit() {
    const first = this.navList && this.navList.find(n => n.active);
    this.activeId = first ? first.id : (this.navList && this.navList[0] ? this.navList[0].id : '');
  }

  setActive(id: string) {
    this.activeId = id;
  }

  activeIndex(): number {
    return this.navList ? this.navList.findIndex(n => n.id === this.activeId) : 0;
  }

}
