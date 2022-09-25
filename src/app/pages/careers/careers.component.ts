import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
})
export class CareersComponent implements OnInit {
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Careers",
    img:"04.png"
  };

  List : any[] =[
    {
      title:"Finance adviser-2 Posts",
      job:['It is a long established fact that a reader will be distracted.','The point of using Lorem Ipsum is that.','Many desktop publishing packages and web page.',
        'There are many variations of passages.','All the Lorem Ipsum generators on the Internet.','It uses a dictionary of over 200 Latin words.'],
      qualification:['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center']
    },

    {
      title:"Marketing Manager-1 Posts",
      job:['It is a long established fact that a reader will be distracted.','The point of using Lorem Ipsum is that.','Many desktop publishing packages and web page.',
        'There are many variations of passages.','All the Lorem Ipsum generators on the Internet.','It uses a dictionary of over 200 Latin words.'],
      qualification:['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center']
    },

    {
      title:"Health and Medical Expert -1 Posts",
      job:['It is a long established fact that a reader will be distracted.','The point of using Lorem Ipsum is that.','Many desktop publishing packages and web page.',
        'There are many variations of passages.','All the Lorem Ipsum generators on the Internet.','It uses a dictionary of over 200 Latin words.'],
      qualification:['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center']
    },
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
