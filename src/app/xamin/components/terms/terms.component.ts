import {Component, Input, OnInit} from '@angular/core';
import { PluginsService } from '../../plugins.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html'
})
export class TermsComponent implements OnInit {

  @Input() List: any[];
  @Input() titleSectionProp: any[];
  navItems = [];


  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435187656',
    email: 'support@appscalex.com'
  };

  data: any = {
    title: 'Terms of Use',
    img: '03.png'
  };


  constructor(private plugins: PluginsService) { }

  ngOnInit() {

    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);


  }

}
