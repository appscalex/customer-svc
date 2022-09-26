import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-about-us-two',
  templateUrl: './about-us-two.component.html'
})
export class AboutUsTwoComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+19168084228',
    email: 'support@flashinfra.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'About Us',
    img: '04.png'
  };

  titleSectionProp: any = {
    title: 'ABOUT US',
    subTitle: 'Human Behaviour, Data Science',
    description: 'The most powerful tool we have as developers is automation.'
  };

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
