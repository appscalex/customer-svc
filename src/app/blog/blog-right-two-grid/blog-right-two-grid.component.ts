import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { BLOG_DETAILS } from '../blogs';

@Component({
  selector: 'app-blog-right-two-grid',
  templateUrl: './blog-right-two-grid.component.html',
})
export class BlogRightTwoGridComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435187656',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'Right Sidebar Grid 2',
    img: '04.png'
  };

  grid = '6';

  List: any[] =  BLOG_DETAILS ;

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
