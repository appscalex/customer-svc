import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-managed-analytics',
  templateUrl: './managed-analytics.component.html'
})
export class ManagedAnalyticsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Managed Analytics",
    img:"05.png"
  };

  public activeMenu = '/services/managed-analytics';
     
  className=" ";

  checkList1 : any[] = [
    'Efficiently manage and govern ongoing operations of analytics processes',
    'Access on-demand data scientists to quickly scale your analytics team',
    'Rapid time to insight',
    'Lower operating cost and business risk'
  ];
  
  checkList2: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
  checkList3: any[] = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
