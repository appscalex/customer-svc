import { Component, OnInit, Input } from '@angular/core';
import { servicesMenu } from '../../../constants/menu';


@Component({
  selector: 'app-service-menu',
  templateUrl: './service-menu.component.html'
})
export class ServiceMenuComponent implements OnInit {

  @Input() activeMenu: string;

  public serviceMenu = servicesMenu;

  constructor() { }

  ngOnInit() {
  }

}
