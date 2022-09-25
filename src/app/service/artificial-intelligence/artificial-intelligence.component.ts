import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-artificial-intelligence',
  templateUrl: './artificial-intelligence.component.html'
})
export class ArtificialIntelligenceComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Artificial Intelligence",
    img:"05.png"
  };

  public activeMenu = '/services/artificial-intelligence';
     
  className=" ";

  checkList1 : any[] = [
    'Efficiently manage and govern ongoing operations of analytics processes',
    'Access on-demand data scientists to quickly scale your analytics team',
    'Rapid time to insight',
    'Lower operating cost and business risk'
  ];
  
  checkList2: any[] = [
    'Efficiently manage and govern ongoing operations of analytics processes',
    'Access on-demand data scientists to quickly scale your analytics team',
    'Rapid time to insight',
    'Lower operating cost and business risk'
  ];
   
  checkList3: any[] = [
    'Efficiently manage and govern ongoing operations of analytics processes',
    'Access on-demand data scientists to quickly scale your analytics team',
    'Rapid time to insight',
    'Lower operating cost and business risk'
  ];
 

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
