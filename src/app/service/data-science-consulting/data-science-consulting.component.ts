import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-data-science-consulting',
  templateUrl: './data-science-consulting.component.html'
})
export class DataScienceConsultingComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Data Science Consulting",
    img:"07.png"
  };

  public activeMenu = '/services/data-science-consulting';
     
  className=" ";

  checkList= [
    'Predictive maintenance',
    'Operational intelligence',
    'Enhanced product quality',
    'customer experience',
    'Sales effectiveness'
  ];
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
