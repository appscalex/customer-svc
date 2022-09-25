import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';


@Component({
  selector: 'app-data-visualization-services',
  templateUrl: './data-visualization-services.component.html'
})
export class DataVisualizationServicesComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Data Visualization Services",
    img:"05.png"
  };

  public activeMenu = '/services/data-visualization-services';
     
  className=" ";

  List1: any[] = [
    { title: 'Big Data Consulting', icon: 'flaticon flaticon-growth', desc: 'It is a long established fact that a reader will be distracted.' },
    { title: 'Apache Hadoop', icon: 'flaticon flaticon-grouping', desc: 'It is a long established fact that a reader will be distracted.' }
  ];

  List2: any[] = [
    { title: 'Apache Spark', icon: 'flaticon flaticon-cloud-1', desc: 'It is a long established fact that a reader will be distracted.' },
    { title: 'Apache Cassandra', icon: 'flaticon flaticon-box', desc: 'It is a long established fact that a reader will be distracted.' }
  ];

  teamList: any[] = [
    {
      img:  "2.jpg",
      name: "Mark McManus",
      position: "COO",

    },
    {
      img:  "3.jpg",
      name: "Jack White",
      position: "CEO",

    },
    {
      img:  "4.jpg",
      name: "Handry White",
      position: "CTO",

    },
    {
      img:  "5.jpg",
      name: "Jack McManus",
      position: "Project Manager",

    },
    {
      img:  "1.jpg",
      name: "Marcash Dane",
      position: "Project Manager",

    }
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
