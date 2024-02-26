import {Component, Input, OnInit} from '@angular/core';
import { PluginsService } from '../../plugins.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html'
})
export class PrivacyComponent implements OnInit {

  @Input() List: any[];
  @Input() titleSectionProp: any[];

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435187656',
    email: 'support@appscalex.com'
  };

  data: any = {
    title: 'Privacy Policy',
    img: '02.png'
  };


  constructor(private plugins: PluginsService) { }

  ngOnInit() {

    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);


  }

}
