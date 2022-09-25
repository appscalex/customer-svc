import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-big-data-services',
  templateUrl: './big-data-services.component.html'
})
export class BigDataServicesComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Big Data Services",
    img:"06.png"
  };

  public activeMenu = '/services/big-data-services';
     
  className=" ";

  List: any[] = [
    { title: 'Apache Hadoop', image: './assets/images/about-us/03.png', desc: 'It is a long established.'},
    { title: 'Apache Spark', image: './assets/images/about-us/04.png', desc: 'It is a long established.'},
    { title: 'Apache Cassandra', image: './assets/images/about-us/05.png', desc: 'It is a long established.'},
    { title: 'Big Data Consulting', image: './assets/images/about-us/04.png', desc: 'It is a long established.'},
  ];
  checkList1 : any[] = [
    'Simply dummy text of the Lorem Ipsum.',
    'There are many variations of passages.',
    'Contrary to popular belief, Lorem ',
    'It is a long established fact that a reader.',
    'All the Lorem Ipsum generators.'
  ];
  
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
