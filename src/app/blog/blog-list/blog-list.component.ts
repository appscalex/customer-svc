import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { BLOG_DETAILS } from '../blogs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-8638386533',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'Blog',
    img: '04.png'
  };

  grid = '12';
  id: number = 1;
  pageSize: number = 5;


  List: any[] =  BLOG_DETAILS;
  OriginalList: any[] =  Object.assign([], BLOG_DETAILS);

  constructor(private plugins: PluginsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);

    this.route.queryParams.subscribe(params => {
      this.id = params['id'] || 1;
      this.paginate(this.OriginalList, this.pageSize, this.id);
   });


  }

   paginate(records, page_size, page_number) : void {
    this.List =  records.slice((page_number - 1) * page_size, page_number * page_size);
  }

}
